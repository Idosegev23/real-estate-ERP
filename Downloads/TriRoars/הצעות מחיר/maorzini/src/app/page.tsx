"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { FaWhatsapp, FaCheckCircle, FaCheck, FaRegClock, FaCreditCard, FaTools, FaLaptopCode, FaRocket } from "react-icons/fa";
import { HiChevronLeft, HiCursorClick } from "react-icons/hi";
import dynamic from "next/dynamic";

// טעינה דינמית של קומפוננטים
const AnimatedLogo = dynamic(
  () => import("../components/AnimatedLogo"),
  { ssr: false }
);

const LogoIcon = dynamic(
  () => import("../components/LogoIcon"),
  { ssr: false }
);

const CodeBlock = dynamic(
  () => import("../components/CodeBlock"),
  { ssr: false }
);

const FeatureBoxes = dynamic(
  () => import("../components/FeatureBoxes"),
  { ssr: false }
);

const AnimatedButton = dynamic(
  () => import("../components/AnimatedButton"),
  { ssr: false }
);

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [includeSupport, setIncludeSupport] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApproval = async () => {
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch("/api/send-approval", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client: "מאור זיני",
          includeSupport: includeSupport
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setError("אירעה שגיאה בשליחת האישור. אנא נסה שוב מאוחר יותר.");
      }
    } catch (err) {
      setError("אירעה שגיאה בשליחת האישור. אנא נסה שוב מאוחר יותר.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    "דף בית מעוצב ומרשים",
    "עמודים נפרדים לכל תחום ביטוח",
    "עמוד אודות אישי",
    "עמוד יצירת קשר עם טופס",
    "המלצות לקוחות",
    "התאמה למובייל",
    "עיצוב נגיש ונעים",
    "שדרוג תוכן קיים",
    "SEO בסיסי",
    "העלאה לדומיין",
    "אזור מגזין למאמרים קיימים",
    "מחשבונים אינטראקטיביים"
  ];

  return (
    <>
      <div className="hero-pattern"></div>
      
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollPosition > 100 ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md py-2' : 'py-4'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LogoIcon />
            <AnimatedLogo width={scrollPosition > 100 ? 120 : 150} height={scrollPosition > 100 ? 60 : 75} />
          </div>
          <div className={`transition-opacity duration-300 ${scrollPosition > 100 ? 'opacity-100' : 'opacity-0'}`}>
            <AnimatedButton href="#approve" className="px-4 py-2 text-sm">
              אישור הצעה
            </AnimatedButton>
          </div>
        </div>
      </div>
      
      <main className={`flex min-h-screen flex-col p-6 pt-24 md:p-12 md:pt-32 max-w-5xl mx-auto ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="w-full">
          {/* כותרת ראשית */}
          <div className="mb-12 text-center md:text-right">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center md:text-right">
              <span className="block mb-2">אנחנו לא <span className="text-gray-400">מרכיבים</span> אתרים.</span>
              <span>אנחנו <span className="relative inline-block text-indigo-600 dark:text-indigo-400">
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
                יוצרים
              </span> <span className="gradient-text">אותם.</span></span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center md:text-right mt-6">
              פתרון מותאם אישית עבור מאור זיני ביטוחים
            </h2>
          </div>

          {/* קוד ותכונות */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-1">
              <CodeBlock className="mb-6" />
              <div className="text-center md:text-right">
                <div className="inline-block bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-mono text-blue-600 dark:text-blue-400">function</span> + <span className="text-purple-600 dark:text-purple-400">design</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  אתר מקצועי. קוד נקי. עיצוב מדויק. חוויה מושלמת.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <FeatureBoxes />
            </div>
          </div>

          {/* תוכן ההצעה */}
          <div className="glass-card p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-8 gradient-text inline-block">תכולת הפרויקט</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <span className="feature-icon">
                    <FaLaptopCode />
                  </span>
                  פיתוח ועיצוב האתר
                </h3>
                <ul className="space-y-2 mb-6">
                  {features.slice(0, 6).map((feature, index) => (
                    <li key={index} className="opacity-90 hover:opacity-100 transition-opacity flex items-center">
                      <FaCheck className="text-green-500 mr-2 ml-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <span className="feature-icon">
                    <FaRocket />
                  </span>
                  תכונות ותשתית
                </h3>
                <ul className="space-y-2 mb-6">
                  {features.slice(6).map((feature, index) => (
                    <li key={index} className="opacity-90 hover:opacity-100 transition-opacity flex items-center">
                      <FaCheck className="text-green-500 mr-2 ml-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* זמן ועלות */}
          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="flex-1 glass-card p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/20 rounded-full transition-all duration-500 group-hover:scale-150 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="feature-icon">
                    <FaRegClock />
                  </span>
                  זמן עבודה
                </h2>
                <div className="text-5xl font-bold gradient-text">5–7</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">ימי עבודה</div>
              </div>
            </div>

            <div className="flex-1 glass-card p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 dark:bg-indigo-900/20 rounded-full transition-all duration-500 group-hover:scale-150 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="feature-icon">
                    <FaCreditCard />
                  </span>
                  עלות כוללת
                </h2>
                <div className="text-5xl font-bold gradient-text">4,000</div>
                <div className="mt-2 text-gray-600 dark:text-gray-300">ש"ח (לא כולל מע"מ)</div>
              </div>
            </div>
          </div>

          {/* תחזוקה שוטפת */}
          <div className="gradient-border mb-16">
            <div className="glass-card p-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">ליווי ותחזוקה שוטפת</h2>
                <label htmlFor="includeSupport" className="flex items-center cursor-pointer">
                  <div className="ml-3 text-gray-600 dark:text-gray-300">כלול בהצעה</div>
                  <div className={`w-14 h-7 flex items-center rounded-full p-1 duration-300 ease-in-out ${includeSupport ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'}`}>
                    <div className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${includeSupport ? 'translate-x-7' : ''}`}></div>
                  </div>
                  <input 
                    type="checkbox" 
                    id="includeSupport" 
                    className="hidden" 
                    checked={includeSupport} 
                    onChange={() => setIncludeSupport(!includeSupport)}
                  />
                </label>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">250 ש"ח / חודש</div>
              <p className="text-gray-600 dark:text-gray-300">(לא כולל מע"מ)</p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4 text-sm">
                <span className="font-semibold block mb-2">כולל:</span>
                <ul className="space-y-1">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2 ml-2 flex-shrink-0" />
                    <span>עדכוני תוכן</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2 ml-2 flex-shrink-0" />
                    <span>העלאת מאמרים</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2 ml-2 flex-shrink-0" />
                    <span>תחזוקה שוטפת</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2 ml-2 flex-shrink-0" />
                    <span>תמיכה טכנית</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* כפתורי פעולה */}
          <div id="approve" className="py-8">
            {!isSuccess ? (
              <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
                <AnimatedButton 
                  onClick={handleApproval} 
                  disabled={isSubmitting}
                  type="primary"
                >
                  {isSubmitting ? (
                    "שולח..."
                  ) : (
                    <>
                      <FaCheck className="ml-2" /> אני מאשרת את ההצעה
                    </>
                  )}
                </AnimatedButton>

                <AnimatedButton 
                  href="https://wa.me/972547667775"
                  target="_blank"
                  type="success"
                >
                  <FaWhatsapp className="ml-2 text-xl" /> יש לי שאלה נוספת בוואטסאפ
                </AnimatedButton>
              </div>
            ) : (
              <div className="animate-fadeIn p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mb-4">
                  <FaCheckCircle className="text-3xl animate-pulse" />
                  <span className="text-2xl font-medium">האישור נשלח בהצלחה</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg">תודה על האישור, ניצור איתך קשר בהקדם!</p>
              </div>
            )}

            {error && (
              <div className="mt-6 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl text-red-600 dark:text-red-400 text-center">
                {error}
              </div>
            )}
          </div>
          
          <footer className="mt-24 text-center">
            <div className="mb-6">
              <div className="inline-block">
                <AnimatedLogo width={120} height={60} />
              </div>
            </div>
            <div className="mb-2 text-gray-500">© 2024 TriRoars. כל הזכויות שמורות.</div>
            <a 
              href="https://www.triroars.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-gray-500 transition-colors"
            >
              עוצב על ידי TriRoars
            </a>
          </footer>
        </div>
      </main>
    </>
  );
}
