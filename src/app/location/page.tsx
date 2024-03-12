// "use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Card from '@/components/ui/cardLocation'
import { LocationData } from '@/data/LocationData'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Location - Fresh Beton Indonesia",
  description: "Halaman location Fresh Beton Indonesia",
  icons: {
    icon : "./icon.ico",
  }
};


const page = () => {
  return (
    <section>
    <Header/>
     <div data-aos="fade-up" className='gap-4 flex flex-wrap justify-center py-1 pt-20 '>
        {LocationData.map(location => (
            <Card key={location.id} location={location} />
        ))}
    </div>
   <Footer/>
   </section>
  )
}

export default page