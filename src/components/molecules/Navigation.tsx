import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavLink from '../atoms/NavLink';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setCurrentPath(location.pathname);
    setMobileMenuOpen(false); // Cerrar menú al cambiar de ruta
  }, [location]);

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/sobre-mi', label: 'Sobre Mí' },
    { path: '/proyectos', label: 'Proyectos' },
    { path: '/contacto', label: 'Contacto' }
  ];

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Navegación para pantallas medianas y grandes */}
      <nav className="hidden md:flex items-center space-x-6">
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

      {/* Botón de menú para móviles */}
      <button 
        className="md:hidden menu-button p-2 text-white focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menú"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div 
              className="absolute right-0 top-0 h-screen w-64 bg-black/90 shadow-lg py-20 px-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
            >
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.path} 
                    to={item.path} 
                    isActive={currentPath === item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
