// components/Header.tsx
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../public/FRESH BETON INDONESIA copy.png';
import { Translate } from '@phosphor-icons/react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isTop = scrollTop < 50; // Atur nilai scroll threshold sesuai kebutuhan
      if (isTop !== isScrolled) {
        setIsScrolled(isTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <header className={`drop-shadow-md text-black p-4 flex justify-between items-center px-10 sticky top-0 z-50 ${isScrolled ? 'bg-transparent' : 'bg-white'}`}>
      {/* Logo di kiri */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} height={50}/>
        </Link>
      </div>
      
      {/* Menu di tengah */}
      <nav className="flex space-x-4 gap-6">
        <a href="/about" className="hover:text-green-800">About Us</a>
        <a href="/product" className="hover:text-green-800">Product</a>
        <a href="/portfolio" className="hover:text-green-800">Portfolio</a>
        <a href="/news" className="hover:text-green-800">News</a>
      </nav>

      {/* Tombol Translate di kanan */}
      <button className="text-black hover:text-green-800">
        <Translate size={32} />
      </button>
    </header>
  );
};

export default Header;
