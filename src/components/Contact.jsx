import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // הגדרת סכמת אימות
  const schema = yup.object().shape({
    fullName: yup.string().required("שם מלא הוא שדה חובה").min(2, "שם חייב להכיל לפחות 2 תווים"),
    email: yup.string().email("כתובת אימייל לא תקינה").required("אימייל הוא שדה חובה"),
    phone: yup.string().required("מספר טלפון הוא שדה חובה").matches(/^0\d{8,9}$/, "מספר טלפון לא תקין"),
    company: yup.string(),
    message: yup.string().required("הודעה היא שדה חובה").min(10, "ההודעה חייבת להכיל לפחות 10 תווים"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");
    
    try {
      // שליחת הנתונים לשרת (צריך לבנות אנדפוינט בשרת)
      await axios.post("/api/contact", data);
      
      // אם ההודעה נשלחה בהצלחה
      setSubmitSuccess(true);
      reset(); // איפוס הטופס
      
      // אחרי 5 שניות מסיר את הודעת ההצלחה
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      // במקרה של שגיאה
      console.error("שגיאה בשליחת הטופס:", error);
      setSubmitError("אירעה שגיאה בשליחת הטופס. אנא נסו שנית מאוחר יותר או צרו קשר ישירות במספר הטלפון המופיע באתר.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // אנימציה לאלמנטים
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={childVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            צרו איתנו קשר
          </motion.h2>
          <motion.div variants={childVariants} className="h-1 w-20 bg-primary mx-auto mb-6"></motion.div>
          <motion.p variants={childVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            השאירו פרטים ונחזור אליכם בהקדם עם מידע כיצד KA יכולה לסייע לכם להטמיע פתרונות AI ולהוביל חדשנות בארגון שלכם.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* פרטי קשר */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="md:col-span-4 flex flex-col justify-between"
          >
            <div>
              <motion.h3 variants={childVariants} className="text-2xl font-bold mb-6 text-gray-900">
                פרטי קשר
              </motion.h3>
              <motion.p variants={childVariants} className="text-gray-600 mb-8">
                צוות המומחים שלנו זמין לכל שאלה או בקשה. אנו מזמינים אתכם ליצור קשר באחת מהדרכים הבאות:
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={childVariants} className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">טלפון</h4>
                    <a href="tel:+97252-303-0009" className="text-gray-600 hover:text-primary transition-colors">
                      052-303-0009
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={childVariants} className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">אימייל</h4>
                    <a
                      href="mailto:kochavith.arnon@gmail.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      kochavith.arnon@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              variants={childVariants}
              className="bg-white shadow-lg p-6 rounded-lg mt-8 border-r-4 border-primary"
            >
              <h4 className="font-bold text-xl mb-3 text-gray-900">צריכים ייעוץ מהיר?</h4>
              <p className="text-gray-600 mb-4">
                לקבלת מענה מיידי ניתן להתקשר ישירות או להשאיר פרטים כאן ונחזור אליכם בהקדם.
              </p>
            </motion.div>
          </motion.div>

          {/* טופס יצירת קשר */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="md:col-span-8"
          >
            <motion.div
              variants={childVariants}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ההודעה נשלחה בהצלחה!</h3>
                  <p className="text-gray-600">תודה שיצרתם איתנו קשר. נחזור אליכם בהקדם האפשרי.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
                      <p className="text-red-600">{submitError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        {...register("fullName")}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.fullName ? "border-red-500" : "border-gray-300"
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors`}
                        placeholder="הזינו את שמכם המלא"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        אימייל *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors`}
                        placeholder="הזינו את כתובת האימייל שלכם"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone")}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors`}
                        placeholder="הזינו את מספר הטלפון שלכם"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                        חברה / ארגון
                      </label>
                      <input
                        type="text"
                        id="company"
                        {...register("company")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="הזינו את שם החברה שלכם (לא חובה)"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      הודעה *
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors`}
                      placeholder="כתבו את ההודעה שלכם כאן..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="text-left">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all ${
                        isSubmitting
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:bg-primary-dark hover:shadow-md"
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          שולח...
                        </span>
                      ) : (
                        "שליחת הודעה"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 