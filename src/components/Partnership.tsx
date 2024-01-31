"use client"
import Image from 'next/image'
import React from 'react'
import CarouselPartner from './ui/CarouselPartner'

const Partnership = () => {
  return (
   <section className='h-screen'>
     <div className='text-4xl font-bold text-orange-600 text-center capitalize'>Partnership</div>
   <div>
   <CarouselPartner/>
   </div>
   </section>
  )
}

export default Partnership