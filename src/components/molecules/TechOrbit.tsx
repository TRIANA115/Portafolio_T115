import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TechIcon {
  id: number;
  icon: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitSpeed: number;
  startPosition: number;
  x?: number;
  y?: number;
}

const TechOrbit: React.FC = () => {
  const [techIcons, setTechIcons] = useState<TechIcon[]>([
    {
      id: 1,
      icon: '🌐', // HTML
      color: '#E34F26',
      size: 40,
      orbitRadius: 180,
      orbitSpeed: 20,
      startPosition: 0
    },
    {
      id: 2,
      icon: '💅', // CSS
      color: '#1572B6',
      size: 35,
      orbitRadius: 180,
      orbitSpeed: 25,
      startPosition: 72
    },
    {
      id: 3,
      icon: '⚛️', // React
      color: '#61DAFB',
      size: 45,
      orbitRadius: 180,
      orbitSpeed: 30,
      startPosition: 144
    },
    {
      id: 4,
      icon: '🟦', // TypeScript
      color: '#3178C6',
      size: 35,
      orbitRadius: 180,
      orbitSpeed: 22,
      startPosition: 216
    },
    {
      id: 5,
      icon: '🟨', // JavaScript
      color: '#F7DF1E',
      size: 38,
      orbitRadius: 180,
      orbitSpeed: 28,
      startPosition: 288
    },
    {
      id: 6,
      icon: '🔥', // Firebase
      color: '#FFCA28',
      size: 42,
      orbitRadius: 180,
      orbitSpeed: 18,
      startPosition: 120
    },
    {
      id: 7,
      icon: '🍃', // Node.js
      color: '#339933',
      size: 40,
      orbitRadius: 180,
      orbitSpeed: 15,
      startPosition: 240
    },
    {
      id: 8,
      icon: '🐙', // GitHub
      color: '#181717',
      size: 38,
      orbitRadius: 180,
      orbitSpeed: 23,
      startPosition: 300
    }
  ]);

  // Función para calcular la posición en la órbita
  const calculatePosition = (icon: TechIcon, time: number) => {
    const angle = ((time / icon.orbitSpeed) + icon.startPosition) % 360;
    const radian = (angle * Math.PI) / 180;
    
    const x = Math.cos(radian) * icon.orbitRadius;
    const y = Math.sin(radian) * icon.orbitRadius;
    
    return { x, y };
  };

  // Actualizar posiciones de los iconos
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() / 100;
      
      setTechIcons(prevIcons => 
        prevIcons.map(icon => {
          const position = calculatePosition(icon, time);
          return { ...icon, x: position.x, y: position.y };
        })
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[400px] h-[400px]">
      {/* Círculo central (tu foto) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-blue-900 border-4 border-blue-400 overflow-hidden z-10">
        {/* Aquí iría tu foto */}
        <div className="w-full h-full bg-gradient-to-br from-blue-800 to-blue-600"></div>
      </div>
      
      {/* Órbita */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-blue-500/20"></div>
      
      {/* Iconos de tecnologías */}
      {techIcons.map((tech) => (
        <motion.div
          key={tech.id}
          className="absolute top-1/2 left-1/2 flex items-center justify-center rounded-full shadow-lg"
          style={{
            width: tech.size,
            height: tech.size,
            backgroundColor: tech.color,
            x: tech.x || 0,
            y: tech.y || 0,
            zIndex: 5
          }}
          animate={{
            x: tech.x || 0,
            y: tech.y || 0
          }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <span className="text-xl">{tech.icon}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechOrbit;
