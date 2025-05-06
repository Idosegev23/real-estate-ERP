import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import DiagnosisPackage from './components/DiagnosisPackage';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // עדכון כותרת המסמך
    document.title = "KA Value - חדשנות וטכנולוגיה";
    
    // הוספת meta תגית לשיפור SEO
    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "KA Value - ייעוץ חדשנות ופתרונות AI לארגונים מובילים בישראל";
    document.head.appendChild(metaDescription);
    
    return () => {
      // ניקוי בעת פירוק הקומפוננטה
      document.head.removeChild(metaDescription);
    };
  }, []);
  
  return (
    <div className="font-heebo text-black" dir="rtl">
      {/* רקע מודרני יותר */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(242,218,145,0.05),_transparent_70%)] pointer-events-none z-[-1]"></div>
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom_right,_rgba(255,255,255,0),_rgba(240,240,240,0.3))] pointer-events-none z-[-1]"></div>
      
      <Header />
      <motion.main 
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Team />
        <Services />
        <DiagnosisPackage />
        <Benefits />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
