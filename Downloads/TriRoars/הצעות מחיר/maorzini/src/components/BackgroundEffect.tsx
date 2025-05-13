"use client";

import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  direction: number;
}

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const colors = ['#1d4ed8', '#4f46e5', '#7e22ce', '#8b5cf6'];
  
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // ניקוי
    return () => {
      window.removeEventListener('resize', updateDimensions);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // יצירת חלקיקים
    const particleCount = Math.min(25, Math.floor(dimensions.width / 50));
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 6 + 2,
        speed: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        direction: Math.random() * Math.PI * 2
      });
    }
    
    particlesRef.current = particles;
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // ציור החלקיקים
      particlesRef.current.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // עדכון מיקום
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        // בדיקת גבולות
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
        
        // ציור קוים בין חלקיקים קרובים
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(drawParticles);
    };
    
    drawParticles();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
};

export default BackgroundEffect; 