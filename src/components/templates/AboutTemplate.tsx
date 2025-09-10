import React from 'react';
import Navbar from '../organisms/Navbar';
import BiographySection from '../molecules/BiographySection';
import MovingBackground from '../MovingBackground';

const AboutTemplate: React.FC = () => {
  const biographyParagraphs = [
    "Soy un apasionado por el mundo de la tecnología y los sistemas, con experiencia en el mantenimiento preventivo y correctivo de equipos de cómputo (PCs y portátiles), asegurando su óptimo rendimiento y prolongando su vida útil.",
    "Cuento con conocimientos en la configuración de redes, instalación y gestión de cámaras de seguridad, así como en la implementación y administración de routers, garantizando conectividad estable y entornos tecnológicos seguros.",
    "Al mismo tiempo, poseo habilidades en el desarrollo Full Stack, manejo de bases de datos relacionales y no relacionales, y despliegues en Docker, uniendo el mundo del software con la infraestructura tecnológica.",
    "Soy un entusiasta y usuario de Linux, apasionado por sus diferentes distribuciones, especialmente aquellas enfocadas en el hacking ético y la ciberseguridad, lo que me permite explorar, aprender y potenciar mis habilidades técnicas con una mentalidad creativa y hacker.",
    "Me considero una persona proactiva, adaptable y con rápida capacidad de aprendizaje, siempre motivado a aportar valor en proyectos tecnológicos, combinando mis competencias en sistemas, redes, Linux y desarrollo de software."
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <MovingBackground />
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <BiographySection paragraphs={biographyParagraphs} />
        </div>
      </main>
    </div>
  );
};

export default AboutTemplate;
