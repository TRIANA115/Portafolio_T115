import React from 'react';
import Button from '../atoms/Button';
import SocialBar from '../molecules/SocialBar';
import TechOrbit from '../molecules/TechOrbit';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Columna izquierda - Información */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <p className="text-blue-400 mb-2 font-mono">Hola Mundo, Soy Esteban</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Ingeniero en</span><br />
            <span className="text-white">Sistemas y</span><br />
            <span className="text-blue-400">Desarrollador Web</span>
          </h1>
          
          <p className="text-gray-300 mb-8 max-w-lg">
            Apasionado por crear soluciones digitales innovadoras y funcionales 
            que impacten positivamente al usuario final.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="primary">Descargar CV</Button>
            <Button variant="secondary">Contáctame</Button>
          </div>
          
          <SocialBar />
        </div>
        
        {/* Columna derecha - Órbita de tecnologías */}
        <div className="w-full md:w-1/2 flex justify-center">
          <TechOrbit />
        </div>
      </div>
    </section>
  );
};

export default Hero;
