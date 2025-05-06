import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  CheckCircle, 
  CaretDown, 
  CaretUp, 
  ClockCounterClockwise, 
  Presentation, 
  Lightbulb, 
  FileDoc, 
  UsersThree,
  Gear
} from "phosphor-react";
import { Link } from "react-scroll";

const DiagnosisPackage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openStep, setOpenStep] = useState(0);

  const diagnosisSteps = [
    {
      title: "אפיון ראשוני",
      hours: 4,
      icon: <ClockCounterClockwise weight="duotone" size={32} className="text-primary" />,
      description: "פגישת היכרות עם הגורמים הרלוונטיים בארגון, מיפוי ראשוני של צרכים, אתגרים ויעדים עסקיים. בשלב זה נלמד על התרבות הארגונית, התהליכים המרכזיים והאתגרים המשמעותיים ביותר שהארגון מתמודד איתם.",
      methodology: "שיטת עבודה: ראיונות עומק עם מנהלים בכירים, סדנאות מובנות למיפוי צרכים והזדמנויות, תצפיות בסביבת העבודה וניתוח מסמכים ארגוניים קיימים.",
      points: [
        "מיפוי צרכים וציפיות - מה הארגון מצפה להשיג באמצעות AI",
        "זיהוי מטרות עסקיות מרכזיות וחיבורן ליכולות טכנולוגיות", 
        "פגישות עם בעלי תפקידים מובילים לזיהוי נקודות מבט שונות",
        "סקירת תשתיות טכנולוגיות קיימות והערכת מוכנות לשילוב AI"
      ]
    },
    {
      title: "אבחון תהליכים",
      hours: 10,
      icon: <Gear weight="duotone" size={32} className="text-primary" />,
      description: "ניתוח מעמיק של תהליכים נבחרים, זיהוי צמתים קריטיים, אינטגרציות אפשריות ונקודות כאב. נצלול לעומק התהליכים העסקיים, נבחן את זרימת המידע, נקודות החיכוך ואת הפוטנציאל לאוטומציה וייעול.",
      methodology: "שיטת עבודה: מיפוי תהליכים מובנה, ניתוח חסמים בשיטת root cause analysis, שימוש בכלי ייעודי למדידת זמנים ועלויות, וסימולציות עומק למציאת נקודות שיפור.",
      points: [
        "מיפוי תהליכים עסקיים מקצה לקצה באמצעות כלים מתקדמים",
        "זיהוי נקודות כאב וחסמים בתהליכים קיימים והערכת עלותם לארגון", 
        "ניתוח פערי יעילות ופריון והשוואתם לסטנדרטים בתעשייה",
        "הערכת בשלות טכנולוגית ליישום AI והמשאבים הנדרשים לשדרוג"
      ]
    },
    {
      title: "סדנת הזדמנויות",
      hours: 4,
      icon: <Presentation weight="duotone" size={32} className="text-primary" />,
      description: "מפגש עם צוות מוביל להצגת ממצאים ראשוניים וחשיבה משותפת על הזדמנויות לשילוב AI. בסדנה אינטראקטיבית זו נחשוף את התובנות הראשוניות ונעבוד יחד עם המנהלים לאתר הזדמנויות בעלות פוטנציאל גבוה.",
      methodology: "שיטת עבודה: סדנה אינטראקטיבית בשיטת design thinking, שימוש בכלי חשיבה יצירתית כמו customer journey mapping, ותרגילי תיעדוף מובנים להערכת השפעה ומאמץ.",
      points: [
        "הצגת ממצאי האבחון הראשוני בצורה ויזואלית ואפקטיבית",
        "דיון פתוח על פתרונות אפשריים והיתכנות הטמעתם בארגון", 
        "תיעדוף הזדמנויות על פי השפעה/מאמץ בשיטת impact/effort matrix",
        "סיעור מוחות על יישומי AI פוטנציאליים ובחינת היתרונות העסקיים"
      ]
    },
    {
      title: "עבודת עומק",
      hours: 8,
      icon: <Lightbulb weight="duotone" size={32} className="text-primary" />,
      description: "בחינת אפשרויות יישום מעשיות, השוואת פתרונות, ניתוחי עלות/תועלת, וגיבוש המלצות. בשלב זה ננתח לעומק את ההזדמנויות שזוהו, נבחן פתרונות אפשריים ונעריך את ההשפעה העסקית הפוטנציאלית.",
      methodology: "שיטת עבודה: מחקר שוק מעמיק, הערכות ROI מבוססות מודלים כלכליים, סקירת טכנולוגיות מתקדמות והתאמתן לצרכי הארגון, וניתוח מקרי בוחן דומים בתעשייה.",
      points: [
        "מחקר פתרונות AI מתאימים לצרכי הארגון המבוסס על ניסיון רב",
        "ניתוחי ROI והערכות עלות/תועלת המאפשרים קבלת החלטות מושכלות", 
        "בחינת מודלים לשילוב AI בתהליכים קיימים עם מינימום הפרעה לפעילות",
        "גיבוש תוכנית פעולה אופרטיבית הכוללת שלבי יישום, לוחות זמנים ותקציבים"
      ]
    },
    {
      title: "דו\"ח מסכם",
      hours: 4,
      icon: <FileDoc weight="duotone" size={32} className="text-primary" />,
      description: "הצגת דו\"ח מפורט, כולל מפת דרכים, המלצות מעשיות והצעת שלבי יישום. בפגישת הסיכום נציג דו\"ח מקיף המפרט את כל הממצאים, ההזדמנויות והמלצות היישום עם תכנית פעולה מפורטת.",
      methodology: "שיטת עבודה: תבנית דו״ח ייעודית שפיתחנו עם מאות מדדים ונקודות התייחסות, מצגת אינטראקטיבית להצגת התוצרים, והכנת חבילת מסמכים מפורטת הכוללת תכניות עבודה מוכנות ליישום.",
      points: [
        "הצגת מפת דרכים ליישום AI עם אבני דרך ברורות ושלבי יישום מדורגים",
        "פירוט תהליכי עבודה מומלצים ושינויים ארגוניים נדרשים להטמעה מוצלחת", 
        "סיכום השקעות נדרשות ותשואות צפויות בחתכי זמן שונים (קצר, בינוני וארוך)",
        "הגדרת שלבי יישום ואבני דרך לביצוע המאפשרים מעקב והערכה שוטפים"
      ]
    }
  ];

  const benefits = [
    "תהליך מהיר ויעיל (30 שעות) המאפשר קבלת תובנות והמלצות בזמן קצר ללא פגיעה באיכות",
    "התאמה מלאה לתקציב וליכולות הארגון לפי גודל ואופי הפעילות תוך מיקוד בצרכים האמיתיים",
    "תכנון חכם לפני השקעה מלאה בטכנולוגיות AI יקרות שמונע בזבוז משאבים יקרים",
    "בסיס להחלטות אסטרטגיות מושכלות עם הבנה מעמיקה של הצרכים והאתגרים הייחודיים",
    "זיהוי הזדמנויות מיידיות לשיפור והתייעלות עם השפעה משמעותית על הביצועים העסקיים"
  ];

  const deliverables = [
    "מפת דרכים מפורטת להטמעת AI בארגון עם שלבים ברורים ותכנית פעולה אופרטיבית",
    "דו\"ח אבחון מקיף הכולל ניתוח כמותי ואיכותי של התהליכים והפוטנציאל לשיפור",
    "המלצות לטווח המיידי והארוך עם סדרי עדיפויות לביצוע המבוססים על השפעה והיתכנות",
    "הגדרת KPIs ברורים למדידת הצלחת התהליך והיישום לאורך זמן ולצורך התאמות",
    "פורטפוליו פתרונות אפשריים מותאמים לצרכי הארגון ולתקציב בגישה מדורגת ומבוקרת"
  ];

  const toggleAccordion = (index) => {
    setOpenStep(openStep === index ? -1 : index);
  };

  return (
    <section id="diagnosis" className="py-24 bg-gradient-to-b from-background to-white">
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
            חבילת האבחון המקיפה <span className="text-primary">AI-Ready</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            צעד ראשון אידיאלי לארגונים המעוניינים להטמיע בינה מלאכותית בצורה אפקטיבית, 
            מותאמת לצרכיהם וללא השקעות מיותרות
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">מטרות האבחון</h3>
            <div className="bg-white rounded-xl shadow-md p-6 border-r-4 border-primary">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3 mr-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle weight="duotone" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>זיהוי הזדמנויות משמעותיות לשילוב בינה מלאכותית בארגון שיביאו לתוצאות עסקיות מדידות</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle weight="duotone" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>מיפוי נקודות כאב שניתן לפתור באמצעות טכנולוגיות AI מתקדמות המותאמות לתהליכים הקיימים</span>
                  </li>
                </ul>
                <ul className="space-y-3 mr-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle weight="duotone" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>בניית מפת דרכים ברורה ושלבי יישום מדורגים המאפשרים התקדמות בטוחה ומבוקרת</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle weight="duotone" className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span>הערכת משאבים נדרשים ותמחור מדויק של תהליך ההטמעה לטווח הקצר והארוך</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">5 השלבים ל<span className="text-primary">AI מוצלח</span></h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {diagnosisSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`border-b border-gray-200 ${index === diagnosisSteps.length - 1 ? 'border-b-0' : ''}`}
                >
                  <button 
                    className={`flex justify-between items-center w-full px-6 py-5 text-right focus:outline-none transition-all ${openStep === index ? 'bg-primary/5' : 'hover:bg-gray-50'}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${openStep === index ? 'bg-primary/20' : 'bg-gray-100'} p-2 rounded-full transition-colors`}>
                        {step.icon}
                      </div>
                      <span className="font-bold text-lg">{step.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                        {step.hours} שעות
                      </span>
                      <div className="text-primary">
                        {openStep === index ? <CaretUp size={20} weight="bold" /> : <CaretDown size={20} weight="bold" />}
                      </div>
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${openStep === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                      <p className="mb-4">{step.description}</p>
                      <div className="bg-white p-4 rounded-lg mb-4 border-r-2 border-primary">
                        <p className="text-sm text-muted">{step.methodology}</p>
                      </div>
                      <div className="border-r-2 border-primary pr-4 mt-5">
                        <p className="font-medium mb-3">תוצרי השלב:</p>
                        <ul className="space-y-2">
                          {step.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle weight="fill" className="text-primary flex-shrink-0 mt-1" size={16} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary"
            >
              <div className="flex items-center justify-center mb-4">
                <FileDoc weight="duotone" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-5 text-center">תוצרים שתקבלו</h3>
              <ul className="space-y-3 mr-2">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle weight="fill" className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary"
            >
              <div className="flex items-center justify-center mb-4">
                <UsersThree weight="duotone" size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-5 text-center">יתרונות התהליך</h3>
              <ul className="space-y-3 mr-2">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle weight="fill" className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="mb-6 max-w-3xl mx-auto text-lg font-medium">
              עם צוות מומחים מנוסה ומתודולוגיה מוכחת, אנו מעניקים לכם את הכלים לקבל החלטות מושכלות בתחום ה-AI
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="btn btn-primary px-8 py-4 inline-block text-lg shadow-sm hover:shadow-md"
            >
              לתיאום פגישת היכרות
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisPackage; 