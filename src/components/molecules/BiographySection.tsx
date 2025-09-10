import React from 'react';
import { motion } from 'framer-motion';
import InfoCard from './InfoCard';

interface BiographySectionProps {
  paragraphs: string[];
  className?: string;
}

const BiographySection: React.FC<BiographySectionProps> = ({ paragraphs, className = '' }) => {
  // Iconos específicos para cada párrafo
  const icons = [
    <i className="fas fa-laptop-medical"></i>, // Mantenimiento de equipos
    <i className="fas fa-network-wired"></i>,  // Redes y cámaras
    <i className="fas fa-code-branch"></i>,    // Desarrollo Full Stack
    <i className="fab fa-linux"></i>,          // Linux y hacking ético
    <i className="fas fa-rocket"></i>          // Proactividad y aprendizaje
  ];

  return (
    <motion.div 
      className={`max-w-7xl mx-auto ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">Sobre Mí</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {paragraphs.map((paragraph, index) => (
          <InfoCard 
            key={index} 
            text={paragraph} 
            index={index}
            icon={icons[index]}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default BiographySection;
