"use client"
import React from 'react';
import backgroundImage from '../../public/IMG_8274.png'; // Used as background image
import CarouselHero from '../ui/Carousel';
import Link from 'next/link';


const HeroSection = () => {
  return (
    // <section className="relative h-screen bg-cover bg-center bg-[#65B741]">
    <section className="relative pb-12 bg-center dark:bg-slate-800 dark:text-white">
      <CarouselHero/>

      {/* Overlay untuk efek gelas */}
      {/* Ensure you remove unnecessary comments */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Konten di tengah */}
      {/* <div className="absolute inset-10 flex items-center justify-start pl-10"> */}
        {/* Kotak dengan efek glass */}
        {/* <div className="bg-white bg-opacity-30 p-6 rounded-md">
          <h1 className="text-4xl font-bold text-white">Welcome to Our Website</h1>
          <p className="text-lg text-white mt-4">Discover amazing things with us.</p>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
