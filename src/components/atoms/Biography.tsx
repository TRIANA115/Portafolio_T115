import React from 'react';

interface BiographyProps {
  text: string;
  className?: string;
}

const Biography: React.FC<BiographyProps> = ({ text, className = '' }) => {
  return (
    <p className={`text-lg leading-relaxed mb-4 ${className}`}>
      {text}
    </p>
  );
};

export default Biography;
