import React from 'react';
import Card from '../atoms/Card';

interface InfoCardProps {
  text: string;
  index: number;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ text, index, icon }) => {
  return (
    <Card className="w-full h-full flex flex-col" delay={index * 0.1}>
      <div className="flex flex-col items-center text-center h-full">
        {icon && (
          <div className="mb-4 sm:mb-5 text-blue-400 text-3xl sm:text-4xl bg-blue-900/30 p-5 sm:p-6 rounded-full shadow-inner shadow-blue-500/20">
            {icon}
          </div>
        )}
        <div className="flex-grow w-full">
          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default InfoCard;
