"use client"

import React, { useState, useEffect } from 'react';
import PartnerImage1 from '../../../public/Logo_BUMN_Untuk_Indonesia_2020.svg';
import PartnerImage2 from '../../../public/Google__G__logo.svg';
import PartnerImage3 from '../../../public/tokopedia-svgrepo-com.svg';
import tamanSafari from '../../../public/taman-safari.png';
import cimory from '../../../public/pngegg.png';
import MRT from '../../../public/MRT_Jakarta_logo_vertical.svg';
// import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselPartner from '../ui/CarouselPartner';
import Image from 'next/image';

const Partnership = () => {
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImages(true);
    }, 1000); // Sesuaikan dengan durasi yang Anda inginkan sebelum gambar muncul

    return () => clearTimeout(timer);
  }, []);

  return (
    // <section className='py-2 bg-[#FAF5EF]'>
    <section className='py-2 bg-white border-t'>
      <div className='text-3xl font-bold text-green-600 text-center py-2'>Dengan siapa kami bekerja</div>
      <div className="marquee-container ">
        <div className='flex flex-row'>
          {/* <p className='capitalize p-10 bg-[#FAF5EF] z-50'>Partner kami</p> */}
          {/* <p className='p-10 bg-[#FAF5EF] text-green-500 z-50 font-bold w-72 capitalize text-3xl'>20+ Mitra <br /><span className='text-black text-lg font-thin'>project kami</span> </p> */}
          <p className='p-10 bg-white text-green-500 z-50 font-bold w-72 capitalize text-3xl'>20+ Mitra <br /><span className='text-black text-lg font-thin'>project kami</span> </p>
          {/* <p className='capitalize p-10 bg-[#FAF5EF] text-blue-500 z-50'>project partner</p> */}
        <div className="marquee">
          {showImages && (
            <>
              <Image alt='gataua' width={500} height={200} className={`block h-full partner-item`} src={cimory}/>
              {/* <Image alt='gataua' width={200} height={200} className={`block h-full partner-item`} src={tamanSafari} /> */}
              <Image alt='gataua' width={200} height={200} className={`block h-full partner-item`} src={MRT} />
              <Image alt='gataua' width={200} height={200} className={`block h-full partner-item`} src={MRT} />
              <Image alt='gataua' width={200} height={200} className={`block h-full partner-item`} src={MRT} />
            </>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}

export default Partnership;

