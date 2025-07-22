import boto3 
import json 
import pymysql 
import re 
from urllib.parse import unquote_plus 
import os 
from datetime import datetime 
# Initialize AWS clients 
s3_client = boto3.client('s3') 
textract_client = boto3.client('textract') 
sns_client = boto3.client('sns')  # Initialize SNS client 
 
# Database configuration from environment variables 
rds_host = os.getenv("DB_HOST") 
db_username = os.getenv("DB_USER") 
db_password = os.getenv("DB_PASSWORD") 
db_name = os.getenv("DB_NAME") 
table_name = os.getenv("TABLE_NAME") 
 
# SNS Topic ARN from environment variables 
sns_topic_arn = os.getenv("SNS_TOPIC_ARN")  # Set this in your Lambda 
environment variables 
 
# Function to extract fields using regular expressions 
def extract_fields(text): 
    """Extract fields from cheque text.""" 
    fields = { 
        "bank_name": None, 
        "payee_name": None, 
        "Rupeesindigits": None, 
        "Rupeesinwords": None, 
        "cheque_date": None, 
        "Acc_no": "N/A",  # Default to "N/A" if not found 
    } 
 
    # Define patterns for each field 
    bank_name_pattern = re.compile(r"(ICICI|HDFC|AXIS BANK|BANK|State Bank)", 
 
re.IGNORECASE) 
    payee_name_pattern = re.compile(r"Pay\s+([A-Za
z\s]+?)\s+(?:Or\s+Bearer|$)", re.IGNORECASE) 
    rupees_in_digits_pattern = re.compile(r"₹\s*((?:\d{1,2},?)+\d{3})") 
    rupees_in_words_pattern = re.compile( 
        r"Rupees\s+([A-Za-z\s]+(?:thousand|lakh|crore|hundred|and|[A-Za
z]+)+)", 
        re.IGNORECASE 
    ) 
    cheque_date_pattern = re.compile(r"(\d{1,2})[-/](\d{1,2})[-/](\d{4})")  # 
Matches DD-MM-YYYY, etc. 
    acc_no_pattern = re.compile(r"(?:A/c No\.?|A/C NO\.?)\s*([0-9A-Za-z-]+)") 
 
    # Search for each field in the text 
    if (match := bank_name_pattern.search(text)): 
        fields["bank_name"] = match.group() 
    if (match := payee_name_pattern.search(text)): 
        fields["payee_name"] = match.group(1).strip() 
    if (match := rupees_in_digits_pattern.search(text)): 
        fields["Rupeesindigits"] = match.group(1).replace(",", "") 
    if (match := rupees_in_words_pattern.search(text)): 
        # Exclude unwanted phrases like "LIO" and "NOTWITHSTANDING" 
        extracted_words = match.group(1).strip() 
        extracted_words = re.sub(r"(LIO|NOTWITHSTANDING)", "", 
extracted_words, flags=re.IGNORECASE).strip() 
        fields["Rupeesinwords"] = extracted_words 
    if (match := cheque_date_pattern.search(text)): 
        try: 
            date_obj = datetime.strptime(match.group(0), "%d-%m-%Y") 
        except ValueError: 
            try: 
                date_obj = datetime.strptime(match.group(0), "%d/%m/%Y") 
            except ValueError: 
                date_obj = None 
        if date_obj: 
            fields["cheque_date"] = date_obj.strftime("%Y-%m-%d") 
    if (match := acc_no_pattern.search(text)): 
        fields["Acc_no"] = match.group(1) 
 
    return fields 
 
 
# Main Lambda function handler 
def lambda_handler(event, context): 
    try: 
        # Get bucket and object key from the event 
        bucket = event['Records'][0]['s3']['bucket']['name'] 
        key = unquote_plus(event['Records'][0]['s3']['object']['key']) 
        print(f"Processing file from bucket: {bucket}, key: {key}") 
 
        # Extract text from the image using Textract 
        response = textract_client.detect_document_text( 
            Document={'S3Object': {'Bucket': bucket, 'Name': key}} 
        ) 
        
        # Combine extracted lines into a single text block 
        text = ' '.join([item['Text'] for item in response['Blocks'] if 
item['BlockType'] == 'LINE']) 
        print("Extracted Text:", text) 
 
        # Extract fields from the text using regex patterns 
        fields = extract_fields(text) 
        
        # Log the extracted fields for debugging 
        print("Extracted fields:", fields) 
 
        # Connect to the RDS MySQL database 
        connection = pymysql.connect( 
            host=rds_host, user=db_username, password=db_password, 
            database=db_name, cursorclass=pymysql.cursors.DictCursor 
        ) 
        
        # Insert the extracted data into the database 
        with connection.cursor() as cursor: 
            sql = f""" 
                INSERT INTO {table_name} (bank_name, payee_name, 
Rupeesindigits, Rupeesinwords, cheque_date, Acc_no) 
                VALUES (%s, %s, %s, %s, %s, %s) 
            """ 
            cursor.execute(sql, ( 
                fields["bank_name"], fields["payee_name"], 
                fields["Rupeesindigits"], fields["Rupeesinwords"], 
                fields["cheque_date"], fields["Acc_no"] 
 
            )) 
            connection.commit() 
 
        # Close the database connection 
        connection.close() 
 
        # Publish success notification to SNS 
        sns_client.publish( 
            TopicArn=sns_topic_arn, 
            Subject="Cheque Processing Successful", 
            Message=f"Cheque from {fields['bank_name']} for 
{fields['Rupeesindigits']} has been processed successfully." 
        ) 
        print("Notification sent to SNS") 
 
        # Return success response 
        return { 
            "statusCode": 200, 
            "body": json.dumps("Data successfully extracted, stored in RDS, 
and notification sent to SNS") 
        } 
 
    except Exception as e: 
        # Log any exceptions for debugging 
        print("Error:", e) 
 
        # Publish error notification to SNS 
        sns_client.publish( 
            TopicArn=sns_topic_arn, 
            Subject="Cheque Processing Failed", 
            Message=f"Error processing cheque: {str(e)}" 
        ) 
        print("Error notification sent to SNS") 
 
        return { 
            "statusCode": 500, 
            "body": json.dumps(f"Error processing file: {str(e)}") 
        } 
