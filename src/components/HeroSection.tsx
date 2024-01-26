"use client"
import React from 'react';
import logoFBI from '../../public/IMG_8274.png'; // Used as background image

const HeroSection = () => {
  return (
    // <section className="relative h-screen bg-cover bg-center bg-[#65B741]">
    <section className="relative h-screen bg-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center top-0" style={{ backgroundImage: `url(${logoFBI})`,width: "auto", height: "auto", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      {/* Overlay untuk efek gelas */}
      {/* Ensure you remove unnecessary comments */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Konten di tengah */}
      <div className="absolute inset-10 flex items-center justify-start pl-10">
        {/* Kotak dengan efek glass */}
        <div className="bg-white bg-opacity-30 p-6 rounded-md">
          <h1 className="text-4xl font-bold text-white">Welcome to Our Website</h1>
          <p className="text-lg text-white mt-4">Discover amazing things with us.</p>
        </div>
      </div>

      {/* Deskripsi di bawah bagian utama */}
      <div className='text-center text-white absolute bottom-0 left-0 bg-white bg-opacity-30 p-4 px-48 w-full'>
        <h1 className='text-4xl font-bold text-orange-600'>PT. Fresh Beton Indonesia adalah </h1>
        perusahaan beton siap pakai dan beton pracetak. Berdiri sejak Maret 2018 dengan Batching Plant permanen di Neglasari, Sukabumi, bersama dengan Quary dan Crusher PT.GBP. Batching plant memiliki kapasitas 60 m3/jam dengan Armada Truck Mixer 15 unit (kapasitas 7 m3) dan 5 unit Truck minimix. Kami terus berinovasi dalam proses, peralatan, dan material untuk memenuhi standar mutu yang dibutuhkan.
      </div>
    </section>
  );
};

export default HeroSection;
