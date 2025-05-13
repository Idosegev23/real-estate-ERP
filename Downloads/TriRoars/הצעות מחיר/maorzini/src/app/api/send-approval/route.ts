import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// הגדרת הטיפוס של הבקשה נכון עבור Next.js וVercel
export async function POST(request: Request) {
  try {
    // וידוא שיש לנו את משתני הסביבה הנדרשים
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    if (!emailUser || !emailPass) {
      console.error('חסרים משתני סביבה הכרחיים לשליחת מייל');
      return NextResponse.json(
        { error: 'תצורת השרת לא הוגדרה כראוי' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { client, includeSupport } = body;

    // בדיקה שיש את כל הפרטים הנדרשים
    if (!client) {
      return NextResponse.json(
        { error: 'חסרים פרטים נדרשים' },
        { status: 400 }
      );
    }

    // הגדרת transporter של Nodemailer עם הגדרות אופטימליות לסביבת Vercel
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      // הגדרות ביצועים טובים יותר לסביבה serverless
      pool: true,
      maxConnections: 1,
      // משלוח מחדש במקרה של תקלה זמנית
      maxMessages: 100,
      rateDelta: 1000,
      rateLimit: 3
    });

    // טקסט לגבי הליווי
    const supportText = includeSupport 
      ? '<p><strong>כולל ליווי ותחזוקה שוטפת:</strong> 250 ש"ח לחודש</p>'
      : '<p>לא כולל ליווי ותחזוקה שוטפת</p>';

    const now = new Date();
    const timestamp = now.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' });

    // הגדרת תוכן המייל
    const mailOptions = {
      from: emailUser,
      to: 'triroars@gmail.com',
      subject: 'אישור הצעת מחיר - מאור זיני',
      text: `מאור אישרה את הצעת המחיר דרך עמוד הנחיתה.${includeSupport ? ' כולל ליווי ותחזוקה שוטפת.' : ' ללא ליווי ותחזוקה שוטפת.'} זמן האישור: ${timestamp}`,
      html: `
        <div dir="rtl" style="text-align: right; font-family: Arial, sans-serif;">
          <h2>אישור הצעת מחיר</h2>
          <p>מאור אישרה את הצעת המחיר דרך עמוד הנחיתה.</p>
          ${supportText}
          <p>זמן האישור: ${timestamp}</p>
        </div>
      `,
    };

    // שליחת המייל עם טיפול בשגיאות יותר ספציפי
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('שגיאה בשליחת המייל:', emailError);
      return NextResponse.json(
        { error: 'אירעה שגיאה בשליחת המייל' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: 'האישור נשלח בהצלחה',
      includesSupport: includeSupport 
    });
  } catch (error: any) {
    console.error('שגיאה כללית בשליחת האישור:', error?.message || error);
    return NextResponse.json(
      { error: 'אירעה שגיאה בשליחת האישור' },
      { status: 500 }
    );
  }
} 