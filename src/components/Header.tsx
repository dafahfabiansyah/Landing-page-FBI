// components/Header.tsx
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../public/FRESH BETON INDONESIA copy.png';
import { Translate } from '@phosphor-icons/react';
import Link from 'next/link';
// Header.js

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > 10;
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener pada unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className="bg-white text-black p-4 flex justify-between items-center px-10 sticky top-0 z-50">
    {/* // <header className={` text-black p-4 flex justify-between items-center px-10 sticky top-0 z-50 ${isScrolled ? 'bg-opacity-25' : 'bg-white'}`}>   */}
    {/* <header className={` text-black p-4 flex justify-between items-center px-10 sticky top-0 z-50 bg-white`}>   */}
    {/* Logo di kiri */}
      <div className="flex items-center">
        <Link href="/">
        <Image src={logo} alt="Logo" width={50} height={50}/>
        </Link>
      </div>
      
      {/* Menu di tengah */}
      <nav className="flex space-x-4 gap-6">
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#product" className="hover:text-gray-300">Product</a>
        <a href="#" className="hover:text-gray-300">Portfolio</a>
        <a href="#" className="hover:text-gray-300">News</a>
      </nav>

      {/* Tombol Translate di kanan */}
      <button className="text-black hover:text-gray-300">
      <Translate size={32} />
      </button>
    </header>
  );
};

export default Header;

