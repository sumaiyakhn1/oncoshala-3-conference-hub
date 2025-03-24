
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  variant: 1 | 2 | 3 | 4;
  color: string;
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
    
    // Generate particles
    const newParticles: Particle[] = [];
    const numParticles = Math.min(Math.floor(windowSize.width / 100), 15);
    
    const colors = [
      'from-teal-400 to-teal-200',
      'from-teal-300 to-beige-100',
      'from-beige-300 to-beige-100',
      'from-teal-500 to-teal-300',
      'from-teal-200 to-beige-200',
    ];
    
    for (let i = 0; i < numParticles; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        size: Math.random() * 30 + 40,
        variant: (Math.floor(Math.random() * 4) + 1) as 1 | 2 | 3 | 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    
    setParticles(newParticles);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize.width, windowSize.height]);
  
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-radial from-teal-50 to-beige-50 opacity-80"></div>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.color}`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            filter: 'blur(8px)',
            animation: `particle-move-${particle.variant} ${15 + particle.id % 10}s ease-in-out infinite ${particle.id % 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
