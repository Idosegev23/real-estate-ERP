import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Lightbulb,
  CheckCircle,
  Handshake,
  ChatCircleText,
  Briefcase,
  UsersFour
} from "phosphor-react";
import { Link } from "react-scroll";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    {
      icon: <Lightbulb weight="duotone" size={42} className="text-primary" />,
      title: "ניסיון מצטבר",
      description: "צוות מנוסה עם רקע רב בניהול, טכנולוגיה ותהליכי התייעלות בארגונים גדולים ובינוניים. הידע הרחב מאפשר לנו לספק פתרונות בדוקים ומוכחים המותאמים לתרבות והצרכים הייחודיים של כל ארגון.",
      points: ["רקע במגוון תעשיות", "ניסיון טכנולוגי עמוק", "הבנה עסקית רחבה"]
    },
    {
      icon: <CheckCircle weight="duotone" size={42} className="text-primary" />,
      title: "ראייה הוליסטית",
      description: "שילוב מושלם בין הבנה עסקית מעמיקה ויכולות טכנולוגיות מתקדמות, המאפשר לנו לבחון כל אתגר מזוויות שונות ולהציע פתרונות שמתייחסים לכל ההיבטים - החל מהטכנולוגיה ועד לאנשים והתרבות הארגונית.",
      points: ["ניתוח אסטרטגי ועסקי", "מומחיות טכנולוגית", "הבנת תהליכי שינוי ארגוניים"]
    },
    {
      icon: <Handshake weight="duotone" size={42} className="text-primary" />,
      title: "קשרים וחיבורים",
      description: "רשת קשרים ענפה עם מפתחים, ספקים, ומומחי תוכן מובילים בתעשייה. יכולת לחבר בין גורמים שונים לטובת יצירת פתרונות מורכבים והבאת המומחים הטובים ביותר למשימות ספציפיות.",
      points: ["שותפויות אסטרטגיות", "מאגר ספקים מובילים", "רשת מומחים עולמית"]
    },
    {
      icon: <ChatCircleText weight="duotone" size={42} className="text-primary" />,
      title: "מקצועיות מוכחת",
      description: "תיק עבודות מרשים והמלצות ממגוון ארגונים בתחומים שונים. ההצלחות שלנו בפרויקטים קודמים מהוות אבן דרך לפרויקטים הבאים, וממחישות את היכולת שלנו להביא לתוצאות ממשיות ומדידות.",
      points: ["מדדי הצלחה מוכחים", "לקוחות חוזרים", "פרויקטים פורצי דרך"]
    }
  ];

  const stats = [
    { number: "25+", label: "שנות ניסיון", icon: <Briefcase weight="duotone" size={32} /> },
    { number: "50+", label: "פרויקטים מוצלחים", icon: <CheckCircle weight="duotone" size={32} /> },
    { number: "100+", label: "ארגונים מרוצים", icon: <UsersFour weight="duotone" size={32} /> }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-white to-background">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-primary pb-4 inline-block">
            היתרונות שלנו
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            מה שהופך את KA לשותף אידיאלי בתהליך הטמעת הבינה המלאכותית וקידום החדשנות בארגון שלך.
            הגישה הייחודית שלנו משלבת בין הבנה עסקית עמוקה לידע טכנולוגי מתקדם.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex gap-4 items-start p-6">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted text-sm">{benefit.description}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 border-t border-gray-100">
                <ul className="space-y-1.5">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="text-sm flex items-center">
                      <span className="text-primary ml-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-xl shadow-md text-center border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">הצלחתכם היא המטרה שלנו</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            אנו מאמינים כי טכנולוגיה צריכה לשרת את העסק, ולא להיפך. הגישה שלנו מבטיחה פתרונות בינה מלאכותית שמשתלבים בתהליכים הקיימים ומייצרים ערך עסקי אמיתי ומדיד.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-primary/10 p-6 rounded-xl shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-10"
          >
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="btn btn-primary px-8 py-3 inline-block"
            >
              דבר איתנו עוד היום
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 