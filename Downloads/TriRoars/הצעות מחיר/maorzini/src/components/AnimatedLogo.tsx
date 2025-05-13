import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface AnimatedLogoProps {
  width?: number;
  height?: number;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ width = 180, height = 90 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className={`absolute inset-0 blur-lg bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-30 transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}></div>
        <div className={`relative transform transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
          <Image
            src="/logo.png"
            alt="לוגו מאור זיני ביטוחים"
            width={width}
            height={height}
            priority
            className="h-auto z-10 relative"
          />
        </div>
      </div>
      <div className={`absolute -z-10 top-1/2 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700 ${isHovered ? 'opacity-80 scale-100' : 'opacity-0 scale-0'}`}></div>
      <div className={`absolute -z-10 bottom-0 left-4 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-700 delay-100 ${isHovered ? 'opacity-80 scale-100' : 'opacity-0 scale-0'}`}></div>
      <div className={`absolute bottom-2 w-full text-center text-xs font-medium text-blue-600 dark:text-blue-400 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        מאור זיני ביטוחים
      </div>
    </div>
  );
};

export default AnimatedLogo; 