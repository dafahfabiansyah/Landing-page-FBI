"use client"

import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import logo from '../../public/FRESH BETON INDONESIA copy.png';
import { List, Translate, X } from '@phosphor-icons/react';
import Link from 'next/link';
import ToggleButton from './ToggleButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isTop = scrollTop < 50;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className='sticky top-0 z-50'>
      <div className={`fixed inset-0 bg-white z-50 overflow-hidden transition-transform duration-300 
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <div className="p-4">
          <nav className="flex flex-col space-y-4">
            <NavLink href="/" active={false}>Home</NavLink>
            <NavLink href="/about" active={false}>About Us</NavLink>
            <NavLink href="/product" active={false}>Product</NavLink>
            <NavLink href="/portfolio" active={false}>Portofolio</NavLink>
            <NavLink href="/contact" active={false}>Contact Us</NavLink>
            <NavLink href="/news" active={false}>News</NavLink>
          </nav>
          <button className='absolute top-4 right-4' onClick={closeMobileSidebar}>
          <X size={32} />
          </button>
        </div>
      </div>

      <header className={`transition duration-300 absolute w-full text-black p-4 flex justify-between items-center px-10 
      ${isScrolled ? 'bg-white drop-shadow-md' : 'bg-transparent'}`}>
        <button className="lg:hidden text-black" onClick={toggleMobileSidebar}>
          <span className="sr-only">Toggle Sidebar</span>
          <List size={32} />
        </button>

        <div className="flex items-center lg:hidden">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50}/>
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50}/>
          </Link>
        </div>
        
        <nav className="hidden lg:flex space-x-4 gap-6 uppercase">
          <NavLink href="/" active={activePage === '/'}>Home</NavLink>
          <NavLink href="/about" active={activePage === '/about'}>About Us</NavLink>
          <NavLink href="/product" active={activePage === '/product'}>Product</NavLink>
          <NavLink href="/portfolio" active={activePage === '/portfolio'}>Portofolio</NavLink>
          <NavLink href="/contact" active={false}>Contact Us</NavLink>
          <NavLink href="/news" active={false}>News</NavLink>
        </nav>

        <button className="hidden lg:block text-black hover:text-[#1BB441]">
          <ToggleButton/>
        </button>
      </header>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  active: boolean;
  children: ReactNode;
}

const NavLink = ({ href, active, children }: NavLinkProps) => {
  return (
    <Link href={href}>
      <div className={`hover:text-green-800 ${active ? 'border-b-2 border-green-800' : ''} text-black`}>
        {children}
      </div>
    </Link>
  );
};


export default Header;
