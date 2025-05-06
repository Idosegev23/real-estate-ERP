import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLinkedin, FaYoutube, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Quick links array
  const quickLinks = [
    { name: "בית", path: "hero" },
    { name: "אודות", path: "about" },
    { name: "חבילת אבחון", path: "diagnosis" },
    { name: "שירותים", path: "services" },
    { name: "יתרונות", path: "benefits" },
    { name: "צור קשר", path: "contact" },
  ];

  // Animation variants
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
    <footer className="bg-white text-black pt-16 pb-6 overflow-hidden shadow-md" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="md:col-span-1"
          >
            <motion.div variants={childVariants}>
              <img
                src="https://res.cloudinary.com/dsoh3yteb/image/upload/v1742806446/Logo2025_xbrzm3.png"
                alt="KA"
                className="h-28 mb-4"
              />
              <p className="text-gray-600 mb-6 max-w-sm">
                KA מתמחה בהטמעת פתרונות טכנולוגיים וחדשניים באמצעות בינה מלאכותית
                (AI) כדי לייצר ערך ממשי ומדיד לארגונים מובילים במשק הישראלי.
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="md:col-span-1"
          >
            <motion.h3 variants={childVariants} className="font-bold text-xl mb-6">
              קישורים מהירים
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={childVariants}>
                  <Link
                    to={link.path}
                    smooth={true}
                    duration={800}
                    className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Section - Updated */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="md:col-span-1"
          >
            <motion.h3 variants={childVariants} className="font-bold text-xl mb-6">
              צרו קשר
            </motion.h3>
            <div className="space-y-4">
              <motion.div variants={childVariants} className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FaPhone className="text-primary" />
                </div>
                <a href="tel:+97252-303-0009" className="text-gray-600 hover:text-primary transition-colors">
                  052-303-0009
                </a>
              </motion.div>
              
              <motion.div variants={childVariants} className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FaEnvelope className="text-primary" />
                </div>
                <a href="mailto:kochavith.arnon@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                  kochavith.arnon@gmail.com
                </a>
              </motion.div>
              
              {/* Social Media */}
              <motion.div variants={childVariants} className="flex space-x-4 space-x-reverse mt-6">
                <a 
                  href="https://www.linkedin.com/company/kavalue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://www.youtube.com/@kavalue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <FaYoutube />
                </a>
                <a 
                  href="https://www.facebook.com/kavalue" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <FaFacebook />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-center">
            &copy; {currentYear} KA. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 