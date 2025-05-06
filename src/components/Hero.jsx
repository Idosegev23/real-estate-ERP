import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Rocket, ChartBar, DeviceMobile, Brain, Graph } from "phosphor-react";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  
  useEffect(() => {
    // אנימציה פשוטה ואפקטיבית לאלמנטים העיקריים
    gsap.fromTo(
      titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );
    
    gsap.fromTo(
      subtitleRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.6 }
    );
    
    return () => {
      // ניקוי אנימציות
      gsap.killTweensOf([titleRef.current, subtitleRef.current]);
    };
  }, []);
  
  // שירותים מודרניים יותר עם איקונים וקטוריים ותיאורים
  const services = [
    { 
      icon: <Brain weight="duotone" size={36} />, 
      text: "פתרונות AI",
      description: "שילוב טכנולוגיות בינה מלאכותית בארגון לשיפור תהליכים, חיסכון בזמן ומשאבים, והגדלת פרודוקטיביות" 
    },
    { 
      icon: <Graph weight="duotone" size={36} />, 
      text: "ייעוץ אסטרטגי",
      description: "ליווי בגיבוש אסטרטגיית AI והטמעתה בארגון, בהתאמה לצרכים העסקיים ולתרבות הארגונית" 
    },
    { 
      icon: <Rocket weight="duotone" size={36} />, 
      text: "חדשנות עסקית",
      description: "זיהוי הזדמנויות לחדשנות באמצעות טכנולוגיות מתקדמות ופיתוח מודלים עסקיים חדשים" 
    }
  ];
  
  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex justify-center items-center overflow-hidden bg-background text-black pt-36 md:pt-44"
      dir="rtl"
    >
      {/* רקע משופר */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
        {/* אפקטים עדינים */}
        <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[30vw] h-[30vw] bg-secondary/10 rounded-full blur-[60px]"></div>
      </div>
      
      {/* תוכן עמוד הבית */}
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="https://res.cloudinary.com/dsoh3yteb/image/upload/v1742806446/Logo2025_xbrzm3.png"
              alt="KA Logo" 
              className="h-32 md:h-40 mx-auto mb-8"
            />
            
            <h1 
              ref={titleRef} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight"
            >
              KA – מובילים <span className="text-primary">בניהול, חדשנות</span> ובינה מלאכותית
            </h1>
            
            <div className="h-[3px] w-24 bg-primary mx-auto mb-8"></div>
            
            <p 
              ref={subtitleRef}
              className="text-xl md:text-2xl text-black mb-10 max-w-3xl mx-auto font-medium"
            >
              העתיד כבר כאן. אנחנו מובילים את הארגונים המובילים בישראל 
              לפתרונות <span className="text-primary font-bold">טכנולוגיים וחדשניים</span> שמייצרים ערך אמיתי ומדיד
            </p>

            {/* כפתורים משופרים */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  className="btn btn-primary px-8 py-4 w-full md:w-auto text-center text-lg shadow-md hover:shadow-lg"
                >
                  צור קשר עוד היום
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Link
                  to="diagnosis"
                  smooth={true}
                  duration={800}
                  className="btn btn-secondary px-8 py-4 w-full md:w-auto text-center text-lg"
                >
                  חבילת האבחון המקיפה
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* קומפוננטות שירותים משופרות */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-b-2 border-primary text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full inline-flex mb-4 mx-auto">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <h3 className="font-bold text-xl mb-3">{service.text}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* אלמנט גלילה משופר */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center"
      >
        <Link to="about" smooth={true} duration={800} className="cursor-pointer">
          <div className="text-black font-medium mb-2">גלול למטה</div>
          <div className="w-10 h-10 flex items-center justify-center mx-auto rounded-full bg-white/70 shadow-sm border border-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero; 