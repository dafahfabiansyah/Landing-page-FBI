"use client"
import { ArrowLineUp, Bell, ShoppingCart, WhatsappLogo, X } from "@phosphor-icons/react";
import { useState } from "react";
import tokopediIcon from "../../public/tokopedia-svgrepo-com.svg";
import Image from "next/image";

function FloatingIcon() {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [hoveringMainButton, setHoveringMainButton] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 rounded-full">
      <div className="flex items-center">
        <div
          className="relative"
          onMouseEnter={() => setSubMenuVisible(true)}
          onMouseLeave={() => !hoveringMainButton && setSubMenuVisible(false)} // Hide submenu only if not hovering main button
        >
          {subMenuVisible && (
            <div className="absolute right-0 bottom-full bg-white border border-gray-300 shadow-md p-2 rounded">
              <a
                href="https://www.tokopedia.com/freshbeton"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 px-2 text-gray-800 hover:bg-gray-200 rounded"
              >
                <Image
                  src={tokopediIcon}
                  alt="Tokopedia Icon"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=6281575453564&text=Halo,%20PT%20FRESH%20BETON%20INDONESIA,%20Saya%20mendapatkan%20informasi%20ini%20dari%20website,%20dan%20ada%20yang%20mau%20saya%20tanyakan?"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 px-2 text-gray-800 hover:bg-gray-200 rounded"
              >
                <WhatsappLogo size={32} />
              </a>
            </div>
          )}
          <button
            className="bg-green-600 p-3 transition-all text-white rounded-full focus:outline-none"
            onClick={() => {
              scrollToTop();
              toggleSubMenu(); // Close submenu after scrolling to top
            }}
            onMouseEnter={() => setHoveringMainButton(true)}
            onMouseLeave={() => setHoveringMainButton(false)}
          >
            {subMenuVisible ? <ArrowLineUp size={32} className='transition-all hover:rotate-45'/>:<ShoppingCart size={32} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FloatingIcon;


