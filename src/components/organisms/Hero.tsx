import React from 'react';
import Button from '../atoms/Button';
import SocialBar from '../molecules/SocialBar';
import TechOrbit from '../molecules/TechOrbit';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Columna izquierda - Información */}
        <motion.div 
          className="w-full md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 mb-2 font-mono text-sm sm:text-base">Hola Mundo, Soy Triana</p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-white">Ingeniero en</span><br />
            <span className="text-white">Sistemas y</span><br />
            <span className="text-blue-400">Desarrollador Web</span>
          </h1>
          
          <p className="text-gray-300 mb-6 sm:mb-8 max-w-lg text-sm sm:text-base">
            Siempre con actitud hacker (ético) y un toque creativo.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
            <a 
              href="/doc/CV_Andres_Felipe_Triana_Garces.pdf" 
              download="CV_Andres_Felipe_Triana_Garces.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Descargar CV</Button>
            </a>
            <a 
              href="/doc/CERTIFICADOS HALLTEC Y FACTUS ANDRES TRIANA.pdf" 
              download="CERTIFICADOS_HALLTEC_Y_FACTUS_ANDRES_TRIANA.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Descargar Certificado de Factus</Button>
            </a>
          </div>
          
          <SocialBar />
        </motion.div>
        
        {/* Columna derecha - Órbita de tecnologías */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="scale-75 sm:scale-90 md:scale-100">
            <TechOrbit />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
