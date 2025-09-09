import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  to, 
  children, 
  isActive = false,
  className = ''
}) => {
  return (
    <Link 
      to={to} 
      className={`
        relative px-3 py-2 text-sm font-medium transition-colors duration-300
        ${isActive 
          ? 'text-blue-400' 
          : 'text-gray-300 hover:text-blue-400'}
        ${className}
      `}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
      )}
    </Link>
  );
};

export default NavLink;
