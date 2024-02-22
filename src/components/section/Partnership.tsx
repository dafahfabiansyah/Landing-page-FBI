"use client"
import React from 'react'
import PartnerImage1 from '../../../public/Logo_BUMN_Untuk_Indonesia_2020.svg'
import PartnerImage2 from '../../../public/Google__G__logo.svg'
import PartnerImage3 from '../../../public/tokopedia-svgrepo-com.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requ
import CarouselPartner from '../ui/CarouselPartner'

const Partnership = () => {
  return (
   <section className='py-2 bg-[#FAF5EF]'>
     <div className='text-4xl font-bold text-orange-600 text-center capitalize pb-1'>Partnership</div>
   <div>
   <CarouselPartner/>
   </div>
    {/* <div className="flex justify-center h-96">
  <div className="list-none overflow-x-auto overflow-y-hidden flex">
    <img className="block h-full" src={PartnerImage1}/>
    <img className="block h-full" src={PartnerImage2}/>
    <img className="block h-full" src={PartnerImage3}/>
    <img className="block h-full" src="http://via.placeholder.com/1000x500"/>
    <img className="block h-full" src="http://via.placeholder.com/500x500/0000FF/808080"/>
    <img className="block h-full" src="http://via.placeholder.com/1000x500"/>
  </div>
</div> */}
   </section>
  )
}

export default Partnership