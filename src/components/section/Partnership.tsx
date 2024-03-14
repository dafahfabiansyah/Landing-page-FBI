"use client"

import React, { useState, useEffect } from 'react';
import PartnershipData from '@/data/PartnershipData';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
    <section className='py-2 bg-white border-t max-h-full transition-all'>
      <div className='text-3xl font-bold text-green-600 text-center py-2'>Dengan siapa kami bekerja</div>
      <div className="marquee-container">
        <div className='flex flex-row'>
          <p className='p-10 bg-white text-green-500 z-50 overflow-y-hidden font-bold w-72 capitalize text-3xl'>900+ Mitra <br /><span className='text-black text-lg font-thin'>project kami</span></p>
          <div className="marquee gap-x-20">
            {showImages && (
              <>
                {PartnershipData.map((partner, index) => (
                  <Image 
                    key={index}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    className={`block partner-item`} 
                    src={partner.image} 
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
