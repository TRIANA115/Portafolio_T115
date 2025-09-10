import React from 'react';
import Navbar from '../organisms/Navbar';
import Hero from '../organisms/Hero';
import MovingBackground from '../MovingBackground';

const HomeTemplate: React.FC = () => {
  return (
    <MovingBackground>
      <div className="page-container">
        <Navbar />
        <Hero />
      </div>
    </MovingBackground>
  );
};

export default HomeTemplate;
