import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-white">
      <div 
        className="container mx-auto px-4"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 border-b-2 border-primary pb-4 inline-block">
            הצוות המוביל
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-text-dark/80">
            צוות המנהלים שלנו מביא ניסיון עשיר ומקיף בתחומי הניהול, החדשנות והטכנולוגיה
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* כוכבית ארנון */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dsoh3yteb/image/upload/v1725735896/kochavith_xrfyrg.png" 
                alt="כוכבית ארנון" 
                className="w-48 h-48 object-cover rounded-full border-4 border-primary"
              />
            </div>
            <div className="flex flex-col text-center md:text-right">
              <h3 className="text-2xl font-bold text-text-dark mb-2">כוכבית ארנון</h3>
              <p className="text-secondary font-medium mb-3">מייסדת ומנכ"לית</p>
              <ul className="text-text-dark/80 space-y-1 mr-4 list-disc">
                <li>מרצה בארגונים ובאקדמיה</li>
                <li>חוקרת ומומחית לשילוב AI בארגונים</li>
                <li>סמנכ"לית בכירה לשעבר בהראל</li>
                <li>25 שנות ניסיון ניהולי</li>
                <li>ניהול Broadcast "AI לאנשים עסוקים"</li>
              </ul>
            </div>
          </motion.div>

          {/* עידו שגב */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dsoh3yteb/image/upload/v1725734946/%D7%AA%D7%9E%D7%95%D7%A0%D7%94_%D7%A2%D7%99%D7%93%D7%95_qwrpgz.png" 
                alt="עידו שגב" 
                className="w-48 h-48 object-cover rounded-full border-4 border-primary"
              />
            </div>
            <div className="flex flex-col text-center md:text-right">
              <h3 className="text-2xl font-bold text-text-dark mb-2">עידו שגב</h3>
              <p className="text-secondary font-medium mb-3">מנכ"ל חטיבת הבינה המלאכותית</p>
              <blockquote className="italic text-text-dark/80 border-r-2 border-primary pr-4 mb-3">
                "טכנולוגיה חדשנית אמיתית צריכה לשרת מטרות עסקיות ואנושיות, לא להיפך."
              </blockquote>
              <p className="text-text-dark/80">
                מוביל חדשנות ופיתוח פתרונות AI המותאמים למגוון תעשיות ויישומים עסקיים.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team; 