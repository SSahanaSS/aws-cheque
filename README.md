# 🧾 ChequeMate – Cloud-Based Cheque Processing & Fraud Detection

**ChequeMate** is a secure, scalable, and intelligent web application designed to automate cheque processing and fraud verification using AWS cloud services. Leveraging advanced OCR, machine learning, and cloud-native tools, ChequeCloud enhances efficiency, accuracy, and data security in financial document processing.

---

## ✨ Functionalities

- 🔐 Secure user authentication via Amazon Cognito  
- 🖼️ Cheque image upload through a React-based UI  
- ☁️ Images stored in Amazon S3 with automatic trigger  
- 🧾 OCR extraction using Amazon Textract  
- 🧠 Fraud detection using AWS SageMaker models  
- 💾 Valid cheque data stored securely in Amazon RDS  
- 🚨 Alerts sent via Amazon SNS for fraud or login anomalies  
- 📊 Real-time monitoring and logging with Amazon CloudWatch  
- 🌐 Scalable and responsive frontend hosted on AWS Amplify

## 🧩 System Architecture

```plaintext
1️⃣ User accesses React Frontend (Hosted on AWS Amplify)
        ⬇️
2️⃣ Logs in using Amazon Cognito (Authentication)
        ⬇️
3️⃣ Uploads cheque image ➜ Stored in Amazon S3
        ⬇️
4️⃣ S3 triggers AWS Lambda
        ⬇️
5️⃣ Lambda invokes Amazon Textract ➜ Extracts cheque contents
        ⬇️
6️⃣ Extracted data sent to SageMaker ➜ Validates cheque (Fraud Detection)
        ⬇️
7️⃣ If Valid:
      ➜ Store cheque data in Amazon RDS (with encryption)
   If Fake:
      ➜ Trigger Amazon SNS ➜ Alert user/admin
        ⬇️
8️⃣ Monitor all actions & logs using Amazon CloudWatch

🔁 Additional:
- Invalid login attempts also trigger SNS alerts
```
---
## 🧱 Technology Stack

## ☁️ AWS Services Used

- **Amazon Textract** – For OCR and cheque data extraction  
- **AWS SageMaker** – For training and deploying fraud detection ML models  
- **Amazon RDS (MySQL)** – For storing cheque data and user information  
- **AWS Lambda** – For serverless backend functions and processing logic  
- **Amazon SNS** – For sending notifications and alerts  
- **Amazon S3** – For storing cheque image uploads securely  
- **Amazon CloudWatch** – For logging, monitoring, and performance tracking  
- **AWS Amplify** – For hosting and deploying the frontend application  
- **Amazon Cognito** – For user authentication and secure access control  
- **Amazon API Gateway** – For routing frontend requests to backend Lambda functions


### 🖥️ Frontend

- **React.js** – For building interactive and responsive user interfaces  
- **Bootstrap** – For consistent styling and responsive design components

  
