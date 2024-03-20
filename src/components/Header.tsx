"use client";

import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import logo from "../../public/FRESH BETON INDONESIA copy.png";
import { CaretDown, List, Translate, X } from "@phosphor-icons/react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isTop = scrollTop < 50;
      setIsScrolled(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="google_translate_element" className="sticky top-0 z-50">
      <div
        className={`fixed inset-0 bg-white z-50 overflow-hidden transition-transform duration-300 
        ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* mobile view */}
        <div className="p-4">
          <nav className="flex flex-col space-y-4">
            <NavLink href="/" active={false}>
              Home
            </NavLink>
            <NavLink href="/about" active={false}>
              About Us
            </NavLink>
            <NavLink href="/product" active={false}>
              Product
            </NavLink>
            <NavLink href="/portfolio" active={false}>
              Portofolio
            </NavLink>
            <NavLink href="/contact" active={false}>
              Contact Us
            </NavLink>
            <NavLink href="/news" active={false}>
              News
            </NavLink>
          </nav>
          <button
            className="absolute top-4 right-4"
            onClick={closeMobileSidebar}
          >
            <X size={32} />
          </button>
        </div>
      </div>

      <header
        className={`transition duration-300 absolute w-full text-black p-4 flex justify-between items-center px-10 
      ${isScrolled ? "bg-white drop-shadow-md" : "bg-transparent"}`}
      >
        <button className="lg:hidden text-black" onClick={toggleMobileSidebar}>
          <span className="sr-only">Toggle Sidebar</span>
          <List size={32} />
        </button>

        <div className="flex items-center lg:hidden">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>
        </div>
        {/* desktop view */}
        <nav className="hidden capitalize lg:flex space-x-4 gap-4 ">
          <NavLink href="/" active={activePage === "/"}>
            beranda
          </NavLink>
          <NavLink href="/about" active={activePage === "/about"}>
            tentang kami
          </NavLink>
          {/* <span>produk</span> */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="transition-all flex items-center focus:outline-none"
            >
              <NavLink href="/product" active={activePage === "/product"}>
                Produk
              </NavLink>
              <CaretDown size={18} className="ml-1" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-[#FAF5EF] rounded-lg shadow-lg z-10">
                <div className="flex flex-col p-4 gap-6">
                  <NavLink
                    active={
                      activePage === "/product/category/ready-mix-concrete"
                    }
                    href="/product/category/ready-mix-concrete"
                  >
                    Ready Mix Concrete
                  </NavLink>
                  <NavLink
                    active={activePage === "/product/category/concrete-pump"}
                    href="/product/category/concrete-pump"
                  >
                    Concrete Pump
                  </NavLink>
                  <NavLink
                    active={activePage === "/product/category/precast"}
                    href="/product/category/precast"
                  >
                    Precast
                  </NavLink>
                  <NavLink
                    active={activePage === "/product/batching-plant"}
                    href="/product/category/batching-plant"
                  >
                    Batching Plant
                  </NavLink>
                  <NavLink
                    active={
                      activePage === "/product/category/mobile-batching-plant"
                    }
                    href="/product/category/mobile-batching-plant"
                  >
                    Mobile Batching Plant
                  </NavLink>
                </div>
              </div>
            )}
          </div>
          <NavLink href="/portfolio" active={activePage === "/portfolio"}>
            portofolio
          </NavLink>
          <NavLink href="/news" active={activePage === "/news"}>
            artikel
          </NavLink>
          <NavLink href="/contact" active={activePage === "/contact"}>
            kontak kami
          </NavLink>
        </nav>
        {/* button translate */}
        <div className="flex flex-row gap-3">
          <Link href="/en">
            <Image
              src="/American_Flag.jpg"
              alt="american flag"
              width={30}
              height={30}
            ></Image>
          </Link>
          <Link href="/">
            <Image
              src="/Indonesian flag.png"
              alt="indonesian flag"
              width={30}
              height={30}
            ></Image>
          </Link>
        </div>
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
      <div
        className={`hover:text-green-800 ${
          active ? "border-b-2 border-green-800" : ""
        } text-black`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Header;
