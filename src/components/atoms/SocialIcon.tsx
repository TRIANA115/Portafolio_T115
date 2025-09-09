import React from 'react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ 
  href, 
  icon, 
  label,
  className = '' 
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`
        flex items-center justify-center w-10 h-10 rounded-full 
        bg-gray-800 text-gray-300 hover:bg-blue-900 hover:text-blue-400
        transition-all duration-300 ${className}
      `}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
