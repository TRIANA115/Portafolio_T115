import React from 'react';
import Biography from '../atoms/Biography';
import { motion } from 'framer-motion';

interface BiographySectionProps {
  paragraphs: string[];
  className?: string;
}

const BiographySection: React.FC<BiographySectionProps> = ({ paragraphs, className = '' }) => {
  return (
    <motion.div 
      className={`max-w-3xl mx-auto p-6 bg-black/30 backdrop-blur-md rounded-xl border border-blue-500/20 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Sobre Mí</h2>
      
      {paragraphs.map((paragraph, index) => (
        <Biography 
          key={index} 
          text={paragraph} 
          className="text-white/90"
        />
      ))}
    </motion.div>
  );
};

export default BiographySection;
