"use client";

import { ArrowBendLeftUp } from "@phosphor-icons/react";
import tokopediIcon from "../../public/tokopedia-38845.png";
import whatsappIcon from "../../public/wa.png";
import Image from "next/image";

// function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function FloatingIcon() {
  return (
    <div className="fixed bottom-0 right-0 z-50 rounded-full mr-5 mb-2 pr-1 pb-1">
      <div className="flex items-center">
        <div>
          <div className="absolute right-0 bottom-full bg-white border border-gray-300 shadow-md p-2 rounded">
            <a
              href="https://www.tokopedia.com/freshbeton"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-bounce hover:animate-none block py-1 px-2 text-gray-800 hover:bg-gray-200 rounded transition-all hover:scale-125"
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
              className="animate-bounce hover:animate-none block py-1 px-2 text-gray-800 hover:bg-gray-200 rounded transition-all hover:scale-125"
            >
              <Image
                src={whatsappIcon}
                alt="WhatsApp Icon"
                width={32}
                height={32}
              />
            </a>
            <button
              onClick={scrollToTop}
              className="block py-1 px-2 text-gray-800 hover:bg-gray-200 rounded"
            >
              <ArrowBendLeftUp size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingIcon;
