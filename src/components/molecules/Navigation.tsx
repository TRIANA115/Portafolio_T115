import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from '../atoms/NavLink';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/sobre-mi', label: 'Sobre Mí' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/contacto', label: 'Contacto' }
  ];

  return (
    <nav className="flex items-center space-x-6">
      {navItems.map((item) => (
        <NavLink 
          key={item.path} 
          to={item.path} 
          isActive={currentPath === item.path}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
