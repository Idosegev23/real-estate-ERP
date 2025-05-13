import React, { useEffect, useState } from 'react';

interface CodeBlockProps {
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ className = '' }) => {
  const [typing, setTyping] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const codeString = `
function createInsurance() {
  const service = provideExcellentService();
  const coverage = createComprehensiveCoverage();
  const support = offerPersonalSupport();
  
  return {
    service,
    coverage,
    support
  };
}`;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    const el = document.getElementById('code-block');
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    if (typing < codeString.length) {
      const timeout = setTimeout(() => {
        setTyping(prev => prev + 1);
      }, 15);
      
      return () => clearTimeout(timeout);
    }
  }, [typing, isVisible, codeString.length]);

  return (
    <div id="code-block" className={`${className} bg-gray-900 dark:bg-gray-950 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/10`}>
      <div className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
        <div className="flex space-x-2 rtl:space-x-reverse">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          <div className="text-xs text-gray-400">insurance.js</div>
        </div>
      </div>
      <pre className="p-6 overflow-x-auto text-left font-mono text-xs md:text-sm text-blue-400">
        <code className="language-javascript">
          {codeString.substring(0, isVisible ? typing : 0)}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock; 