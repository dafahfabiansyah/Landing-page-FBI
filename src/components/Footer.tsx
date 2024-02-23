"use client"
import { FacebookLogo, InstagramLogo, LinkedinLogo, Storefront, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import React, { ReactNode } from 'react';
import Image from "next/image";
import Link from "next/link";
import GoogleMaps from '@/components/GoogleMaps';

interface LinkGroupProps {
    children: ReactNode;
    header: string;
  }
  interface NavLinkProps {
    link: string;
    label: string;
  }

const getCurrentDate = () => {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer className="bg-[#2E2E2E] text-white pt-10 flex z-10 items-center place-items-center gap-4 justify-between mx-auto">
    <div className="container">
      <div className="-mx-4 flex flex-wrap justify-center"> {/* Modifikasi di sini */}
        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
          <div className="mb-10 w-full">
            {/* <a href="https://freshbetonindonesia.vercel.app/" target="_blank" className="mb-6 inline-block max-w-[160px]">
              <Image
                src={IconFbi}
                alt="logo"
                className="max-full"
              />
            </a> */}
            {/* <p className="mb-7 text-base text-body-color dark:text-dark-6">
              Sed ut perspiciatis undmnis is iste natus error sit amet
              voluptatem totam rem aperiam.
            </p> */}
            <GoogleMaps location={{
              lat: 0,
              lng: 0
            }}/>
           
            {/* <p className="flex items-center text-sm font-medium text-dark dark:text-white">
              <span className="mr-3 text-primary">
                <PhoneCall size={32} />
              </span>
              <span>+62 815 7474 7474 </span>
            </p> */}
          </div>
        </div>
        <LinkGroup header="Company">
          <NavLink link="/#" label="PT Farrasindo Perkasa" />
          <NavLink link="/#" label="PT Fresh Beton Indonesia" />
          <NavLink link="/#" label="PT Citi Crane" />
          <NavLink link="/#" label="Simi" />
        </LinkGroup>
        
        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
          <div className="mb-10 w-full">
            <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
              Follow Us On
            </h4>
            <div className="mb-6 flex items-center gap-2">
              <Link href="https://www.facebook.com/Freshbetonindonesia/" target="_blank">
              <FacebookLogo size={32} className="hover:bg-[#3b5998] hover:text-white rounded-md transition-all" />
              </Link>
              <Link href="https://www.instagram.com/freshbeton_indonesia/" target="_blank">
              <InstagramLogo size={32} className="hover:bg-[#405DE6] hover:text-white rounded-md transition-all"/>
              </Link>
              <Link href="https://www.tokopedia.com/freshbeton" target="_blank">
              <Storefront size={32} className="hover:bg-green-500 hover:text-white rounded-md transition-all"/>
              </Link>
              {/* <YoutubeLogo size={32} className="hover:text-white rounded-md hover:bg-red-500 transition-all" />
              <LinkedinLogo size={32} className="hover:text-white rounded-md hover:bg-[#0e76a8] transition-all"/> */}
            </div>
            {/* <p className="text-base text-body-color dark:text-dark-6 capitalize">
              &copy; {getCurrentDate()} fresh beton indonesia
            </p> */}
          </div>
        </div>
        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
          <div className="mb-10 w-full">
            <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            Contact Us
            </h4>
            <div className="mb-6 flex items-center gap-2">
            <button>
              <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Contact</Link>
            </button>
            </div>
            <p className="text-base text-body-color dark:text-dark-6 capitalize">
              &copy; {getCurrentDate()} fresh beton indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

const LinkGroup: React.FC<LinkGroupProps> = ({ children, header }) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;

