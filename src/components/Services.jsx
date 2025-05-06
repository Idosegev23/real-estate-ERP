import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  LightbulbFilament,
  MagnifyingGlassPlus, 
  Users, 
  ShareNetwork, 
  Code, 
  Chalkboard,
  ArrowRight
} from "phosphor-react";
import { Link } from "react-scroll";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <LightbulbFilament weight="duotone" size={48} />,
      title: "ייעוץ אסטרטגי",
      description: "ניתוח צרכים, הגדרת מטרות ויצירת מפת דרכים לשילוב AI במערכות הארגוניות, עם דגש על ROI ומדדי הצלחה מוגדרים",
      items: [
        "ייעוץ בהגדרת אסטרטגיה דיגיטלית",
        "מיפוי הזדמנויות טכנולוגיות",
        "הערכת בשלות ארגונית לחדשנות"
      ]
    },
    {
      icon: <MagnifyingGlassPlus weight="duotone" size={48} />,
      title: "אפיון נקודות כאב",
      description: "זיהוי האתגרים המרכזיים ומציאת פתרונות AI אפקטיביים לפתרונם, תוך שילוב מתודולוגיות איתור צווארי בקבוק בתהליכים",
      items: [
        "מיפוי תהליכים עסקיים",
        "זיהוי מוקדי אי-יעילות",
        "הצעת פתרונות מבוססי AI"
      ]
    },
    {
      icon: <Users weight="duotone" size={48} />,
      title: "ליווי שוטף",
      description: "תמיכה מתמשכת, הדרכה והטמעת פתרונות AI בצורה הדרגתית ובטוחה, עם גישת MVP להוכחת ערך מהיר וצמיחה מבוקרת",
      items: [
        "ליווי הנהלות ומובילי חדשנות",
        "ייעוץ בתהליכי בחירת טכנולוגיות",
        "הטמעה מדורגת בסביבה העסקית"
      ]
    },
    {
      icon: <ShareNetwork weight="duotone" size={48} />,
      title: "חיבורים משלימים",
      description: "יצירת קשר עם ספקים, שותפים ומומחים מתחומים משיקים לפי צורך, תוך ניצול רשת הקשרים הענפה וניסיוננו בשוק",
      items: [
        "חיבור לספקי טכנולוגיה מובילים",
        "מצ׳מייקינג עם שותפים אסטרטגיים",
        "מינוף קהילות חדשנות מקצועיות"
      ]
    },
    {
      icon: <Code weight="duotone" size={48} />,
      title: "פיתוח מותאם אישית",
      description: "בניית פתרונות AI מותאמים לצרכי הארגון המסוימים שלכם, כולל אינטגרציה למערכות קיימות ותחזוקה שוטפת",
      items: [
        "פיתוח יישומי AI ייעודיים",
        "אינטגרציה למערכות קיימות",
        "חיזוי ביצועים והמלצות התייעלות"
      ]
    },
    {
      icon: <Chalkboard weight="duotone" size={48} />,
      title: "הרצאות והדרכות",
      description: "סדנאות, הרצאות וימי עיון מותאמים להעלאת המודעות והידע בארגון, המותאמים במיוחד לתפקידים ולרמות שונות בארגון",
      items: [
        "הרצאות על טרנדים טכנולוגיים",
        "סדנאות מעשיות לצוותים",
        "פיתוח מיומנויות AI לעובדים"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
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
            השירותים שלנו
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            אנו מציעים מגוון שירותים המותאמים לצרכי הארגון, מתוך הבנה כי כל עסק ייחודי בדרכו להטמעת בינה מלאכותית 
            וטכנולוגיות חדשניות. הפתרונות שלנו משלבים ניסיון עסקי ומומחיות טכנולוגית.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted mb-4 text-sm">{service.description}</p>
              
              <div className="border-r-2 border-primary pr-3 mr-1 mt-5">
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm flex items-start">
                      <span className="text-primary ml-2 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg mb-6">
            מעוניינים לדעת איך אנחנו יכולים לעזור לארגון שלכם?
          </p>
          <Link
            to="diagnosis"
            smooth={true}
            duration={800}
            className="btn btn-primary px-6 py-3 inline-flex items-center justify-center gap-2"
          >
            <span>גלה את חבילת האבחון המקיפה שלנו</span>
            <ArrowRight weight="bold" className="text-lg" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 