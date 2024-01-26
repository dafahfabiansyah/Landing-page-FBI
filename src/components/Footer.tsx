"use client"
import { FacebookLogo, LinkedinLogo, PhoneCall, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
// import React, { ReactNode } from "react";
import React, { ReactNode } from 'react';
import IconFbi from '../../public/FRESH BETON INDONESIA-.png'
import Image from "next/image";
interface LinkGroupProps {
    children: ReactNode;
    header: string;
  }
  interface NavLinkProps {
    link: string;
    label: string;
  }

const getDate = () => {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <>
      <footer className="flex z-10 items-center place-items-center bg-white pt-20 gap-4 justify-between mx-auto">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center"> {/* Modifikasi di sini */}
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <a href="https://freshbetonindonesia.vercel.app/" target="_blank" className="mb-6 inline-block max-w-[160px]">
                  <Image
                    src={IconFbi}
                    alt="logo"
                    className="max-full"
                  />
                </a>
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  Sed ut perspiciatis undmnis is iste natus error sit amet
                  voluptatem totam rem aperiam.
                </p>
                <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                  <span className="mr-3 text-primary">
                    <PhoneCall size={32} />
                  </span>
                  <span>+62 815 7474 7474 </span>
                </p>
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
                  <FacebookLogo size={32} className="hover:text-blue-600 transition-all" />
                  <TwitterLogo size={32} className="hover:text-blue-400 transition-all"/>
                  <YoutubeLogo size={32} className="hover:text-white rounded-md hover:bg-red-500 transition-all" />
                  <LinkedinLogo size={32} className="hover:text-white rounded-md hover:bg-blue-300 transition-all"/>
                </div>
                <p className="text-base text-body-color dark:text-dark-6 capitalize">
                  &copy; {getDate()} fresh beton indonesia
                </p>
              </div>
            </div>
            {/* <script async
    src="https://maps.googleapis.com/maps/api/js?key=&loading=async&region=ID&language=in&callback=initMap">
</script> */}
          </div>
        </div>
      </footer>
    </>
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

