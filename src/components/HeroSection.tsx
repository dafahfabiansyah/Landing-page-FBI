// components/HeroSection.tsx
import React from 'react';
import logoFBI from '../../public/IMG_8274.png';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(${logoFBI})`, // Perbaiki penulisan URL di sini
        }}
      >
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md p-8 rounded-lg">
            <h1 className="text-4xl font-bold text-white">Hero Section</h1>
            <p className="text-lg text-white">Your content goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
