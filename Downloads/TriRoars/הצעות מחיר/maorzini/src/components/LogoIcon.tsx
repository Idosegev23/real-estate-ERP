import React, { useState } from 'react';

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center relative">
        {/* רקע מעגלי עם אפקט */}
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-300 ${isHovered ? 'opacity-10 scale-150' : 'opacity-0 scale-100'}`}></div>
        
        {/* האייקון עצמו */}
        <div className={`relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <div className="absolute inset-0.5 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
            <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-xl">מז</div>
          </div>
        </div>
        
        {/* קו מתחת לאייקון בעת hover */}
        <div className={`mt-1 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
        
        {/* טקסט שמופיע בעת hover */}
        <div className={`absolute top-full pt-1 text-xs font-medium transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
          ביטוחים
        </div>
      </div>
    </div>
  );
};

export default LogoIcon; 