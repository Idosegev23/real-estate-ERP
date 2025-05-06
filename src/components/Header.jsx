import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "אודות", to: "about" },
    { name: "צוות", to: "team" },
    { name: "שירותים", to: "services" },
    { name: "חבילת אבחון", to: "diagnosis" },
    { name: "יתרונות", to: "benefits" },
    { name: "צור קשר", to: "contact" },
  ];

  return (
    <motion.header
      dir="rtl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2 backdrop-blur-md bg-white/90"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* לוגו במרכז במובייל, בצד בדסקטופ */}
        <div className="flex-1 flex justify-start">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="https://res.cloudinary.com/dsoh3yteb/image/upload/v1742806446/Logo2025_xbrzm3.png"
              alt="KA Logo"
              className="h-20 md:h-24"
            />
          </Link>
        </div>

        {/* תפריט דסקטופ */}
        <nav className="hidden md:flex items-center justify-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-100}
                className="relative px-5 py-2 text-black hover:text-primary transition-colors cursor-pointer font-medium mx-1 text-center group"
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* כפתור צור קשר */}
        <div className="md:flex flex-1 justify-end hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-2.5 bg-primary text-black rounded-md hover:bg-secondary hover:text-white transition-all cursor-pointer font-bold shadow-sm"
            >
              צור קשר
            </Link>
          </motion.div>
        </div>

        {/* כפתור תפריט מובייל */}
        <div className="md:hidden flex-1 flex justify-end">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black p-2 rounded-md border border-black/10 hover:bg-gray-100"
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* תפריט מובייל */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 * index }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="block px-4 py-3 text-black hover:text-primary transition-colors cursor-pointer font-medium text-center border-b border-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="mt-4 px-6 py-3 bg-primary text-black rounded-md hover:bg-secondary hover:text-white transition-colors cursor-pointer font-bold text-center block"
                  onClick={() => setIsOpen(false)}
                >
                  צור קשר
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 