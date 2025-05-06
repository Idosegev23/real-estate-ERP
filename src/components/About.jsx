import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  RocketLaunch, 
  Shield, 
  Gear, 
  Lightning, 
  Brain, 
  Users, 
  ChartLine, 
  Code, 
  LightbulbFilament,
  Handshake,
  Medal,
  Target
} from "phosphor-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const expertise = [
    {
      icon: <Brain weight="duotone" size={30} className="text-primary" />,
      title: "בינה מלאכותית",
      description: "אינטגרציה של טכנולוגיות AI בתהליכים עסקיים קיימים, פיתוח יישומים מותאמים, והטמעת פתרונות חכמים לאוטומציה וקבלת החלטות נתמכות מידע.",
      bullets: [
        "יישום פתרונות Large Language Models (LLMs)",
        "אוטומציית תהליכים חכמה",
        "חילוץ תובנות מנתונים עסקיים"
      ]
    },
    {
      icon: <RocketLaunch weight="duotone" size={30} className="text-primary" />,
      title: "חדשנות ארגונית",
      description: "פיתוח תרבות חדשנות, הקמת מנגנוני חדשנות פנים-ארגוניים, והטמעת תהליכים תומכי חדשנות המאפשרים לארגון להתאים עצמו לקצב השינויים בשוק.",
      bullets: [
        "יצירת אקוסיסטם חדשנות פנים-ארגוני",
        "תהליכי חשיבה עיצובית (Design Thinking)",
        "פיתוח מוצרים ושירותים חדשניים"
      ]
    },
    {
      icon: <ChartLine weight="duotone" size={30} className="text-primary" />,
      title: "אסטרטגיה דיגיטלית",
      description: "גיבוש אסטרטגיה דיגיטלית כוללת לארגון, זיהוי הזדמנויות עסקיות חדשות, ותכנון מפת דרכים להתמודדות עם אתגרי הטרנספורמציה הדיגיטלית.",
      bullets: [
        "גיבוש אסטרטגיית AI ארגונית",
        "מיפוי הזדמנויות טכנולוגיות",
        "תכנון שלבי יישום מדורגים"
      ]
    },
    {
      icon: <Code weight="duotone" size={30} className="text-primary" />,
      title: "פיתוח פתרונות מותאמים",
      description: "פיתוח ויישום פתרונות טכנולוגיים מותאמים לצרכי הארגון, אינטגרציה עם מערכות קיימות, ובניית תשתיות טכנולוגיות תומכות חדשנות.",
      bullets: [
        "מערכות בינה מלאכותית מותאמות אישית",
        "אינטגרציה עם מערכות ארגוניות",
        "פתרונות אוטומציה ואנליטיקה"
      ]
    },
    {
      icon: <Users weight="duotone" size={30} className="text-primary" />,
      title: "ליווי הנהלות וצוותים",
      description: "ייעוץ אסטרטגי להנהלות בכירות, פיתוח מודלים עסקיים חדשים, והובלת שינויים ארגוניים מורכבים. ליווי צמוד בתהליכי קבלת החלטות קריטיות.",
      bullets: [
        "ייעוץ למנהלים בכירים",
        "הובלת שינויים ארגוניים",
        "פיתוח מנהיגות בעידן הדיגיטלי"
      ]
    },
    {
      icon: <LightbulbFilament weight="duotone" size={30} className="text-primary" />,
      title: "מחקר ופיתוח",
      description: "מחקר טכנולוגיות חדשות, בחינת היתכנות והתאמה לצרכי הארגון, וליווי תהליכי פיתוח חדשניים. זיהוי הזדמנויות לשיפור וייעול תהליכים קיימים.",
      bullets: [
        "זיהוי טכנולוגיות מתפתחות",
        "בחינת היתכנות והתאמה",
        "פיתוח POC והטמעה ראשונית"
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-background">
      <div 
        className="container mx-auto px-4"
        ref={ref}
      >
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-primary pb-4 inline-block">
              אודות KA
            </h2>
            
            <p className="text-lg leading-relaxed mb-5 max-w-3xl mx-auto">
              KA מתמחה בליווי אסטרטגי של ארגונים בתהליכי חדשנות, שירות, פיתוח עסקי והטמעת פתרונות טכנולוגיים מתקדמים. אנו מלווים את הלקוחות שלנו מהשלב האסטרטגי ועד ליישום בפועל, תוך הקפדה על יצירת ערך אמיתי בכל שלב בתהליך.
            </p>
            
            <p className="text-lg leading-relaxed mb-8 font-medium max-w-3xl mx-auto">
              חטיבת הבינה המלאכותית שלנו נועדה להנגיש את ה-AI לעסקים בצורה פרקטית, מהירה וממוקדת תוצאה, ללא צורך בידע טכנולוגי עמוק או השקעות תשתיתיות מורכבות.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
              <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 flex-1 max-w-sm">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Medal weight="duotone" size={32} className="text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">+25</div>
                  <div className="text-sm text-gray-600">שנות ניסיון מצטבר</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 flex-1 max-w-sm">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Handshake weight="duotone" size={32} className="text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">+50</div>
                  <div className="text-sm text-gray-600">ארגונים מרוצים</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-4 flex-1 max-w-sm">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target weight="duotone" size={32} className="text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-gray-600">מחויבות ללקוח</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center border-r-4 border-primary pr-3 max-w-max mx-auto">
              הערכים שלנו
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <motion.div 
                className="card p-6 rounded-xl flex flex-col items-center bg-white shadow-sm"
                whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Lightning weight="duotone" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">מהירות ויעילות</h3>
                <p className="text-center">תהליכים יעילים המותאמים לקצב העסקי המודרני, עם שיטות עבודה מהירות וגמישות המובילות לתוצאות מהירות ומשמעותיות</p>
              </motion.div>
              
              <motion.div 
                className="card p-6 rounded-xl flex flex-col items-center bg-white shadow-sm"
                whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Shield weight="duotone" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">מקצועיות מוכחת</h3>
                <p className="text-center">צוות מומחים עם ניסיון רב בתחומי הייעוץ האסטרטגי, הטכנולוגיה והחדשנות, ועם ניסיון מוכח בליווי ארגונים מובילים במשק הישראלי</p>
              </motion.div>
              
              <motion.div 
                className="card p-6 rounded-xl flex flex-col items-center bg-white shadow-sm"
                whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Gear weight="duotone" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">פתרונות מותאמים</h3>
                <p className="text-center">אפיון מדויק לצרכי הארגון, ללא פתרונות "קופסא" אחידים, תוך התייחסות לאתגרים הייחודיים, לתרבות הארגונית ולמאפיינים הספציפיים של כל ארגון</p>
              </motion.div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-10 text-center border-r-4 border-primary pr-3 max-w-max mx-auto">
              תחומי ההתמחות שלנו
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold self-center">{item.title}</h4>
                  </div>
                  <p className="text-sm mb-4">{item.description}</p>
                  <ul className="space-y-1 pr-2 text-sm text-gray-700">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary text-xl leading-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 text-center"
            >
              <div className="bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto border-r-4 border-primary">
                <h4 className="text-xl font-bold mb-4">גישה הוליסטית לבינה מלאכותית</h4>
                <p className="text-center mb-6">
                  אנו מאמינים כי הטמעה מוצלחת של בינה מלאכותית בארגון מחייבת התייחסות לכל ההיבטים - טכנולוגיים, תהליכיים וארגוניים. 
                  גישתנו ההוליסטית מבטיחה שפתרונות ה-AI לא רק יוטמעו טכנית, אלא יובילו לשינוי אמיתי ולערך משמעותי.
                </p>
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <span className="text-sm text-gray-600">
                    לפרטים נוספים ולהתרשמות מהאופן בו אנו יכולים לסייע לארגון שלכם
                  </span>
                  <button className="btn btn-sm btn-primary">צור קשר</button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 