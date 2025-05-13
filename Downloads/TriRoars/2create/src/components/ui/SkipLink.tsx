'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SkipLinkProps {
  contentId?: string;
}

/**
 * רכיב Skip Link לניווט נגיש יותר, מאפשר למשתמשי מקלדת לדלג ישירות לתוכן העיקרי
 */
export const SkipLink = ({ contentId = 'main-content' }: SkipLinkProps) => {
  const [isFocused, setIsFocused] = useState(false);

  // סגירת הקישור אם המשתמש מתחיל לגלול
  useEffect(() => {
    const handleScroll = () => {
      if (isFocused) {
        setIsFocused(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFocused]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(contentId);
    if (targetElement) {
      targetElement.focus();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsFocused(false);
  };

  return (
    <a
      href={`#${contentId}`}
      className={cn(
        'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-cta-lime text-text-primary px-4 py-2 rounded-md shadow-md transition-all duration-300 focus:outline-none',
        isFocused ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12 pointer-events-none'
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={handleClick}
    >
      דלג לתוכן העיקרי
    </a>
  );
}; 