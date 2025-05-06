/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2DA91',       // צבע מיתוג ראשי
        secondary: '#BF8A49',     // משני כהה
        support: '#BFAB93',       // תומך
        background: '#F2F2F2',    // רקע עיקרי
        textDark: '#0D0D0D',     // טקסט כהה
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 