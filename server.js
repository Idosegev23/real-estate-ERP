import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// __dirname replacement for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from the React app
app.use(express.static(join(__dirname, 'dist')));

// הגדרת הטרנספורטר של Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // ניתן להחליף בשירות אחר או להגדיר SMTP מותאם
  auth: {
    user: process.env.EMAIL_USER, // יש להגדיר בקובץ .env
    pass: process.env.EMAIL_PASS  // יש להגדיר בקובץ .env
  }
});

// אנדפוינט API לשליחת מיילים
app.post('/api/contact', async (req, res) => {
  const { fullName, email, phone, company, message } = req.body;
  
  try {
    // בניית תבנית המייל
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'kochavith.arnon@gmail.com', // כתובת הדוא"ל שאליה יישלחו הפניות
      subject: `פנייה חדשה מאתר KA - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="he">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>פנייה חדשה מאתר KA</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f9f9f9;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              padding-bottom: 20px;
              border-bottom: 2px solid #f0f0f0;
              margin-bottom: 20px;
            }
            .logo {
              max-width: 150px;
              height: auto;
            }
            h1 {
              color: #4f46e5;
              margin-top: 10px;
            }
            .content {
              padding: 20px 0;
            }
            .field {
              margin-bottom: 15px;
            }
            .label {
              font-weight: bold;
              color: #666;
            }
            .value {
              margin-top: 5px;
            }
            .message-box {
              padding: 15px;
              background-color: #f5f5f5;
              border-right: 4px solid #4f46e5;
              border-radius: 4px;
              margin: 15px 0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #f0f0f0;
              color: #999;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>פנייה חדשה מאתר KA</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">שם מלא:</div>
                <div class="value">${fullName}</div>
              </div>
              <div class="field">
                <div class="label">אימייל:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">טלפון:</div>
                <div class="value">${phone}</div>
              </div>
              ${company ? `
              <div class="field">
                <div class="label">חברה:</div>
                <div class="value">${company}</div>
              </div>` : ''}
              <div class="field">
                <div class="label">תוכן ההודעה:</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>הודעה זו נשלחה מטופס יצירת קשר באתר KA</p>
            </div>
          </div>
        </body>
        </html>
      `,
      // שולח גם גרסת טקסט למקרה שהלקוח לא יכול לקרוא HTML
      text: `פנייה חדשה מאתר KA\n\nשם מלא: ${fullName}\nאימייל: ${email}\nטלפון: ${phone}${company ? `\nחברה: ${company}` : ''}\n\nתוכן ההודעה:\n${message}`
    };
    
    // שליחת המייל
    await transporter.sendMail(mailOptions);
    
    // שולח הודעת הצלחה 
    res.status(200).json({ success: true, message: 'ההודעה נשלחה בהצלחה!' });
  } catch (error) {
    console.error('שגיאה בשליחת המייל:', error);
    res.status(500).json({ success: false, message: 'אירעה שגיאה בשליחת ההודעה' });
  }
});

// כל הבקשות האחרות מובילות לעמוד הראשי של הריאקט
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`השרת פועל בפורט ${PORT}`);
}); 