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
    // Órbita interna (280px) - 5 tecnologías
    {
      id: 1,
      icon: 'PHP', // PHP
      color: '#777BB4',
      size: 50,
      orbitRadius: 280,
      orbitSpeed: 25,
      startPosition: 0
    },
    {
      id: 2,
      icon: 'Py', // Python
      color: '#3776AB',
      size: 50,
      orbitRadius: 280,
      orbitSpeed: 22,
      startPosition: 72
    },
    {
      id: 3,
      icon: 'Node', // Node.js
      color: '#339933',
      size: 50,
      orbitRadius: 280,
      orbitSpeed: 28,
      startPosition: 144
    },
    {
      id: 4,
      icon: 'JS', // JavaScript
      color: '#F7DF1E',
      size: 50,
      orbitRadius: 280,
      orbitSpeed: 20,
      startPosition: 216
    },
    {
      id: 5,
      icon: 'TS', // TypeScript
      color: '#3178C6',
      size: 50,
      orbitRadius: 280,
      orbitSpeed: 30,
      startPosition: 288
    },
    
    // Órbita media (320px) - 5 tecnologías
    {
      id: 6,
      icon: '⚛', // React
      color: '#61DAFB',
      size: 55,
      orbitRadius: 320,
      orbitSpeed: 18,
      startPosition: 0
    },
    {
      id: 7,
      icon: '▲', // Next.js
      color: '#000000',
      size: 50,
      orbitRadius: 320,
      orbitSpeed: 24,
      startPosition: 72
    },
    {
      id: 8,
      icon: '✦', // Astro
      color: '#FF5D01',
      size: 52,
      orbitRadius: 320,
      orbitSpeed: 26,
      startPosition: 144
    },
    {
      id: 9,
      icon: 'Ng', // Angular
      color: '#DD0031',
      size: 50,
      orbitRadius: 320,
      orbitSpeed: 22,
      startPosition: 216
    },
    {
      id: 10,
      icon: '◆', // NestJS
      color: '#E0234E',
      size: 48,
      orbitRadius: 320,
      orbitSpeed: 28,
      startPosition: 288
    },
    
    // Órbita externa (360px) - 5 tecnologías
    {
      id: 11,
      icon: '◊', // Laravel
      color: '#FF2D20',
      size: 58,
      orbitRadius: 360,
      orbitSpeed: 15,
      startPosition: 0
    },
    {
      id: 12,
      icon: '▣', // Prisma
      color: '#2D3748',
      size: 55,
      orbitRadius: 360,
      orbitSpeed: 20,
      startPosition: 72
    },
    {
      id: 13,
      icon: 'SQL', // MySQL
      color: '#4479A1',
      size: 55,
      orbitRadius: 360,
      orbitSpeed: 25,
      startPosition: 144
    },
    {
      id: 14,
      icon: 'PG', // PostgreSQL
      color: '#336791',
      size: 55,
      orbitRadius: 360,
      orbitSpeed: 18,
      startPosition: 216
    },
    {
      id: 15,
      icon: '◉', // MongoDB
      color: '#47A248',
      size: 55,
      orbitRadius: 360,
      orbitSpeed: 22,
      startPosition: 288
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
    <div className="relative w-[800px] h-[800px]">
      {/* Círculo central (tu foto) */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-blue-400 overflow-hidden z-10"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
          borderColor: "#60a5fa"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Imagen del usuario */}
        <motion.img 
          src="/images/481174876_1678352506112217_4941095563594970251_n.jpg" 
          alt="Foto de perfil"
          className="w-full h-full object-cover object-center"
          style={{
            objectPosition: "center 50%"
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
      
      {/* Órbitas múltiples con efectos elegantes */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border-2"
        style={{
          borderImage: 'linear-gradient(45deg, #3B82F6, #06B6D4, #3B82F6) 1',
          opacity: 0.3
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border-2"
        style={{
          borderImage: 'linear-gradient(45deg, #10B981, #34D399, #10B981) 1',
          opacity: 0.25
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border-2"
        style={{
          borderImage: 'linear-gradient(45deg, #F59E0B, #FBBF24, #F59E0B) 1',
          opacity: 0.2
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Iconos de tecnologías */}
      {techIcons.map((tech) => (
        <motion.div
          key={tech.id}
          className="absolute top-1/2 left-1/2 flex items-center justify-center rounded-full cursor-pointer border-2 border-white/20 backdrop-blur-sm"
          style={{
            width: tech.size,
            height: tech.size,
            background: `linear-gradient(135deg, ${tech.color}E6, ${tech.color}B3)`,
            x: tech.x || 0,
            y: tech.y || 0,
            zIndex: 5,
            boxShadow: `0 8px 32px ${tech.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`
          }}
          animate={{
            x: tech.x || 0,
            y: tech.y || 0,
            rotate: 360
          }}
          transition={{
            x: { type: "tween", duration: 0.5 },
            y: { type: "tween", duration: 0.5 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          whileHover={{ 
            scale: 1.3,
            boxShadow: `0 12px 40px ${tech.color}60, inset 0 1px 0 rgba(255,255,255,0.4)`,
            zIndex: 10,
            rotate: 0
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span 
            className="font-bold text-white filter drop-shadow-lg select-none"
            style={{
              fontSize: tech.size > 52 ? '14px' : '12px',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {tech.icon}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechOrbit;
