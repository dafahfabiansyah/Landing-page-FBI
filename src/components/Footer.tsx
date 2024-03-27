"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleMaps from "@/components/GoogleMaps";
import { Envelope, Phone } from "@phosphor-icons/react";

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
};

const Footer = () => {
  return (
    <footer className="bg-[#2E2E2E] text-white pt-10 flex z-10 items-center place-items-center gap-4 justify-between mx-auto">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <LinkGroup header="">
            <Image
              className="flex pr-8 items-center justify-center"
              src="/FRESH BETON INDONESIA - white.png"
              alt="logo"
              width={300}
              height={300}
            />
            {/* <p className="text-white w-44">fresh beton indonesia</p> */}
          </LinkGroup>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 capitalize text-lg font-semibold text-dark dark:text-white">
                connect with us
              </h4>
              <div className="mb-6 flex items-center gap-2">
                <Link
                  href="https://www.facebook.com/Freshbetonindonesia/"
                  target="_blank"
                >
                  <Image
                    // size={32}
                    src={"/facebook-removebg-preview.png"}
                    alt={"facebook icon"}
                    width={32}
                    height={32}
                    className="hover:scale-110  rounded-md transition-all"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/freshbeton_indonesia/"
                  target="_blank"
                >
                  <Image
                    src={"/instagram-removebg-preview.png"}
                    alt={"instagram icon"}
                    // size={32}
                    width={32}
                    height={32}
                    className="hover:scale-110 rounded-md transition-all"
                  />
                </Link>
                <Link
                  href="https://www.tokopedia.com/freshbeton"
                  target="_blank"
                >
                  <Image
                    // size={32}
                    src="/tokopedia-38845.png"
                    className="hover:scale-110  rounded-md transition-all"
                    alt={"tokopedia icon"}
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              {/* <div className="">
                <button>
                  <Link
                    href="/contact"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Contact
                  </Link>
                </button>
              </div> */}
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                Address
              </h4>
              <div className="mb-6 flex items-center gap-2">
                <p className="transition-all">
                  JL. Bina Marga No. 76 RT 003 / 005, Sanja, Kec. Citeureup,
                  Kabupaten Bogor, Jawa Barat 16810
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <GoogleMaps
                location={{
                  lat: 0,
                  lng: 0,
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-row justify-between items-center mb-6">
          <ul className="normal-case list-none gap-4 flex flex-row">
            <span className="text-green-700 text-center">
              <Envelope size={32} />
            </span>
            {/* <p className="font-bold text-xl mb-1">Email</p> */}
            <p className="hover:text-green-700 transition-all text-center">
              <Link href="mailto:admin@freshbeton.com">
                admin@freshbeton.com
              </Link>
            </p>
            <li className="flex flex-row gap-4">
              <span className="text-green-700 text-center">
                <Phone size={32} />
              </span>
              {/* <p className="font-bold text-xl mb-1">contact</p> */}
              <p className="hover:text-green-700 transition-all text-center">
                <Link href="https://wa.me/6281574747474" target="_blank">
                  0815 7474 7474
                </Link>
              </p>
              <p className="hover:text-green-700 transition-all text-center">
                <Link href="https://wa.me/6281575453524" target="_blank">
                  0815 7545 3524
                </Link>
              </p>
            </li>
          </ul>
          <p className="text-base text-body-color dark:text-dark-6 capitalize">
            Copyright &copy; {getCurrentDate()} fresh beton indonesia
          </p>
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
