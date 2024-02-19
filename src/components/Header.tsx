"use client"

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import logo from '../../public/FRESH BETON INDONESIA copy.png';
import { Translate } from '@phosphor-icons/react';
import Link from 'next/link';
import ToggleButton from './ToggleButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isTop = scrollTop < 50;
      setIsScrolled(!isTop); // Update isScrolled value based on scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // No dependency since we only need to run this effect once

  useEffect(() => {
    // Determine active page based on window location
    setActivePage(window.location.pathname);
  }, []);

  return (
    <div className='sticky top-0 z-50'>
      <header className={`transition duration-300 absolute w-full text-black p-4 flex justify-between items-center px-10 
      ${isScrolled ? 'bg-white drop-shadow-md' : 'bg-transparent'}`}>
        {/* Logo di kiri */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50}/>
          </Link>
        </div>
        
        {/* Menu di tengah */}
        <nav className="flex space-x-4 gap-6 uppercase">
          <NavLink href="/" active={activePage === '/'}>Home</NavLink>
          <NavLink href="/about" active={activePage === '/about'}>About Us</NavLink>
          <NavLink href="/product" active={activePage === '/product'}>Product</NavLink>
          <NavLink href="/portfolio" active={activePage === '/portfolio'}>Portofolio</NavLink>
          <NavLink href="/contact" active={activePage === '/contact'}>Contact Us</NavLink>
          <NavLink href="/news" active={activePage === '/news'}>News</NavLink>
        </nav>

        {/* Tombol Translate di kanan */}
        <button className="text-black hover:text-[#1BB441]">
          {/* <Translate size={32} /> */}
          <ToggleButton/>
        </button>
      </header>
    </div>
  );
};

// Component for NavLink with dynamic styling for active page
interface NavLinkProps {
  href: string;
  active: boolean;
  children: ReactNode;
}

const NavLink = ({ href, active, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <div className={`hover:text-green-800 ${active ? 'border-b-2 border-green-800' : ''}`}>
        {children}
      </div>
    </Link>
  );
};

export default Header;
