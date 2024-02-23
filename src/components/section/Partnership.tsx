"use client"
import React from 'react'
import PartnerImage1 from '../../../public/Logo_BUMN_Untuk_Indonesia_2020.svg'
import PartnerImage2 from '../../../public/Google__G__logo.svg'
import PartnerImage3 from '../../../public/tokopedia-svgrepo-com.svg'
import tamanSafari from '../../../public/taman-safari.png'
import cimory from '../../../public/pngegg.png'
import MRT from '../../../public/MRT_Jakarta_logo_vertical.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requ
import CarouselPartner from '../ui/CarouselPartner'
import Image from 'next/image'

const Partnership = () => {
  return (
   <section className='py-2 bg-[#FAF5EF]'>
     <div className='text-4xl font-bold text-orange-600 text-center capitalize pb-1'>Partnership</div>
   {/* <div>
   <CarouselPartner/>
   </div> */}
    <div className="flex justify-center h-96">
  <div className="list-none overflow-x-auto overflow-y-hidden flex">
    <Image alt='gataua' width={200} height={200} className="block h-full" src={PartnerImage1}/>
    <Image alt='gataua' width={200} height={200} className="block h-full" src={PartnerImage2}/>
    <Image alt='gataua' width={200} height={200} className="block h-full" src={PartnerImage3}/>
    {/* <Image alt='gataua' width={500} height={200} className="block h-full" src={cimory}/> */}
    {/* <Image alt='gataua' width={200} height={200} className="block h-full" src={tamanSafari}/> */}
    <Image alt='gataua' width={200} height={200} className="block h-full" src={MRT}/>
    <Image alt='gataua' width={200} height={200} className="block h-full" src={MRT}/>
    <Image alt='gataua' width={200} height={200} className="block h-full" src={MRT}/>
    <Image alt='gataua' width={200} height={200} className="block h-full" src={MRT}/>
  </div>
</div>
   </section>
  )
}

export default Partnership