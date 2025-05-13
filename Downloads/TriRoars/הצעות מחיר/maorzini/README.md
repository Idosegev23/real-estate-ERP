# עמוד נחיתה - הצעת מחיר מאור זיני

עמוד נחיתה בעברית עבור הצעת מחיר להקמת אתר עבור מאור זיני ביטוחים.

## תכונות

- עיצוב מותאם לעברית ולכיוון RTL
- תמיכה מלאה במובייל
- אפשרות לאישור הצעת המחיר ישירות מהעמוד
- שליחת הודעת WhatsApp לשאלות נוספות
- שליחת מייל אישור באמצעות Nodemailer

## התקנה

1. התקן את הדיפנדנסים:

```bash
npm install
```

2. צור קובץ `.env.local` והוסף את הפרטים הבאים:

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

הערה: עבור שירות Gmail, עליך ליצור ״סיסמה ייעודית ליישום״. ראה [הוראות כאן](https://support.google.com/accounts/answer/185833).

## פיתוח

הרץ את שרת הפיתוח:

```bash
npm run dev
```

פתח את [http://localhost:3000](http://localhost:3000) בדפדפן שלך לצפייה בתוצאה.

## בנייה לייצור

כדי לבנות את האפליקציה לשימוש בייצור:

```bash
npm run build
```

לאחר מכן, הפעל את הגרסה שנבנתה:

```bash
npm start
```

## טכנולוגיות

- [Next.js](https://nextjs.org/) - מסגרת React
- [Tailwind CSS](https://tailwindcss.com/) - מסגרת CSS
- [React Icons](https://react-icons.github.io/react-icons/) - אייקונים
- [Nodemailer](https://nodemailer.com/) - שליחת אימיילים
