import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div 
      className={`bg-black/40 backdrop-blur-md p-6 rounded-xl border border-blue-500/20 shadow-lg h-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
        borderColor: "rgba(59, 130, 246, 0.5)"
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
