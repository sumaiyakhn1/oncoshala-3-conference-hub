
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  variant: 1 | 2 | 3 | 4;
  color: string;
  speed: number;
}

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1000,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Generate particles with more vibrant colors
    const newParticles: Particle[] = [];
    const numParticles = Math.min(Math.floor(windowSize.width / 60), 25);
    
    // More vibrant, "poppy" colors
    const colors = [
     'from-red-500 to-orange-400', // Fiery Red
  'from-red-600 to-pink-500',   // Warm Red-Pink
  'from-rose-500 to-red-400',   // Soft Rose Red
  'from-red-700 to-red-500',    // Deep Red
  'from-[#DC2626] to-[#F87171]', // Bright Crimson
  'from-[#B91C1C] to-[#EF4444]', // Dark Cherry Red
  'from-[#991B1B] to-[#F87171]', // Intense Blood Red
  'from-[#7F1D1D] to-[#E11D48]', // Rich Wine Red
    ];
    
    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        size: Math.random() * 40 + 30,
        variant: (Math.floor(Math.random() * 4) + 1) as 1 | 2 | 3 | 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 5 + 10,
      });
    }
    
    setParticles(newParticles);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize.width, windowSize.height]);
  
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-radial from-teal-50 via-blue-50 to-purple-50/30 opacity-90"></div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.color}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            filter: 'blur(6px)',
            opacity: 0.7,
            animation: `
              particle-move-${particle.variant} ${particle.speed + 5}s ease-in-out infinite ${particle.id % 5}s,
              pulse-soft 3s ease-in-out infinite ${particle.id % 7}s
            `,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
