import type { Metadata, Viewport } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

// קומפוננט לקוח לבדיקות נגישות
import AccessibilityProvider from "../components/AccessibilityProvider";
import StructuredData from "../components/StructuredData";

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
  title: {
    default: "2Create | אנחנו לא מרכיבים אתרים. אנחנו יוצרים אותם.",
    template: "%s | 2Create"
  },
  description: "שני מומחים. פתרון אחד. קוד + AI = אתר שמדבר עסקים. פיתוח אתרים מותאמים אישית בקוד נקי עם פתרונות AI מתקדמים. עידו שגב וגיא דהן מספקים פתרונות טכנולוגיים ייחודיים לעסקים.",
  keywords: [
    "פיתוח אתרים מותאמים אישית",
    "קוד נקי", 
    "פתרונות AI",
    "עיצוב אתרים מתקדם",
    "Next.js",
    "React",
    "TypeScript",
    "אתרים מהירים",
    "SEO אופטימיזציה",
    "אתרים רספונסיביים",
    "פיתוח פולסטאק",
    "עידו שגב",
    "גיא דהן",
    "2Create",
    "פתרונות טכנולוגיים",
    "אתרים עסקיים",
    "בניית אתרים מקצועיים",
    "חדשנות טכנולוגית",
    "אתרים ללא WordPress",
    "פתרונות מותאמים אישית"
  ],
  authors: [
    { name: "עידו שגב", url: "https://2create.co.il" },
    { name: "גיא דהן", url: "https://2create.co.il" }
  ],
  creator: "2Create - עידו שגב וגיא דהן",
  publisher: "2Create",
  applicationName: "2Create",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL('https://2create.co.il'),
  alternates: {
    canonical: "/",
    languages: {
      "he-IL": "/",
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: '2Create',
    title: 'אנחנו לא מרכיבים אתרים. אנחנו יוצרים אותם.',
    description: 'שני מומחים. פתרון אחד. קוד + AI = אתר שמדבר עסקים. פיתוח אתרים מותאמים אישית בקוד נקי עם פתרונות AI מתקדמים.',
    url: 'https://2create.co.il',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: '2Create - פיתוח אתרים מותאמים אישית ופתרונות AI',
      },
    ],
    locale: 'he_IL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'אנחנו לא מרכיבים אתרים. אנחנו יוצרים אותם.',
    description: 'שני מומחים. פתרון אחד. קוד + AI = אתר שמדבר עסקים.',
    images: ['/logo.png'],
    creator: '@2create_il',
    site: '@2create_il',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code', // להחליף בקוד האמיתי
    // yandex: 'yandex-verification-code',
    // yahoo: 'yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Web Development, AI Solutions, Technology Services',
  other: {
    'msapplication-TileColor': '#6894A6',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': '2Create',
    'mobile-web-app-capable': 'yes',
    'application-name': '2Create',
    'msapplication-tooltip': 'פיתוח אתרים מותאמים אישית ופתרונות AI',
    'msapplication-starturl': '/',
    'msapplication-window': 'width=1024;height=768',
    'msapplication-navbutton-color': '#6894A6',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6894A6" },
    { media: "(prefers-color-scheme: dark)", color: "#6894A6" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
        <Script
          src="/_vercel/insights/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-background min-h-screen antialiased">
        <AccessibilityProvider />
        {children}
      </body>
    </html>
  );
}
