import type { Metadata, Viewport } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";

// איטנרצפט לבדיקות נגישות
import { useEffect } from "react";
import { initializeAxe } from "@/lib/axe";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "אנחנו לא מרכיבים אתרים. אנחנו יוצרים אותם.",
  description: "שני מומחים. פתרון אחד. קוד + AI = אתר שמדבר עסקים.",
  keywords: "פיתוח אתרים, קוד מותאם אישית, AI, עיצוב אתרים, Next.js",
  authors: [
    { name: "עידו שגב" },
    { name: "גיא דהן" }
  ],
  themeColor: "#6894A6",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // הפעלת בדיקות נגישות בסביבת פיתוח
  useEffect(() => {
    initializeAxe();
  }, []);

  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <body className="bg-background min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
