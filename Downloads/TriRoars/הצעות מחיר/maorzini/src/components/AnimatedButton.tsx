import React, { useState, useEffect } from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'primary' | 'secondary' | 'success' | 'warning';
  href?: string;
  target?: string;
  rel?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'primary',
  href,
  target,
  rel,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 });
  const [effectPosition, setEffectPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // קביעת סגנון לפי סוג הכפתור
  let buttonStyle = '';
  switch (type) {
    case 'primary':
      buttonStyle = 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700';
      break;
    case 'secondary':
      buttonStyle = 'from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900';
      break;
    case 'success':
      buttonStyle = 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600';
      break;
    case 'warning':
      buttonStyle = 'from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600';
      break;
  }
  
  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setElementPosition({ x: rect.left, y: rect.top });
    setElementSize({ width: rect.width, height: rect.height });
    setIsHovered(true);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX - elementPosition.x;
    const y = e.clientY - elementPosition.y;
    setEffectPosition({ x, y });
  };
  
  const handleMouseDown = () => {
    setIsPressed(true);
  };
  
  const handleMouseUp = () => {
    setIsPressed(false);
  };
  
  const ButtonElement = href ? 'a' : 'button';
  
  // מאפיינים נוספים אם זה קישור
  const linkProps = href ? { 
    href,
    target,
    rel: target === '_blank' ? 'noopener noreferrer' : rel,
  } : {};
  
  return (
    <ButtonElement
      className={`relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl text-white flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl bg-gradient-to-r ${buttonStyle} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={disabled && !href}
      {...linkProps}
    >
      {/* האפקט שמופיע בהצבעת העכבר */}
      {isHovered && !disabled && (
        <div 
          className="absolute rounded-full bg-white opacity-20 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-500 animate-pulse"
          style={{ 
            top: effectPosition.y, 
            left: effectPosition.x,
            width: isPressed ? elementSize.width * 2 : elementSize.width * 0.5,
            height: isPressed ? elementSize.height * 2 : elementSize.height * 0.5,
          }}
        />
      )}
      
      {/* אפקט גלים */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className={`absolute inset-0 bg-gradient-to-r ${buttonStyle} transition-all duration-300 transform ${isHovered ? 'scale-x-100 opacity-80' : 'scale-x-0 opacity-0'} origin-left`}></div>
      </div>
      
      {/* תוכן הכפתור */}
      <span className="relative z-10">
        {children}
      </span>
    </ButtonElement>
  );
};

export default AnimatedButton; 