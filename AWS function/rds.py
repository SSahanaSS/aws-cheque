import json 
 
import pymysql 
from datetime import date 
 
# Convert date to string before serializing 
def date_converter(obj): 
    if isinstance(obj, date): 
        return obj.strftime('%Y-%m-%d')  # Convert to string format 
    raise TypeError("Type not serializable") 
 
def lambda_handler(event, context): 
    # Database connection details 
    connection = pymysql.connect( 
        host="chequeeasydb.cb068wguewex.eu-west-2.rds.amazonaws.com", 
        user="admin", 
        password="password", 
        database="cheque_processing" 
    ) 
 
    try: 
        with connection.cursor() as cursor: 
            # Query to fetch data 
            cursor.execute("SELECT * FROM cheques ;") 
            result = cursor.fetchall() 
            
            # Convert the result to JSON 
            columns = [col[0] for col in cursor.description] 
            data = [dict(zip(columns, row)) for row in result] 
        
        # Convert data to JSON with date handling using the date_converter 
        return { 
            "statusCode": 200, 
            "body": json.dumps(data, default=date_converter)  # Using the 
custom date converter 
        } 
    except Exception as e: 
        return { 
            "statusCode": 500, 
            "body": str(e) 
        } 
    finally: 
        connection.close()
