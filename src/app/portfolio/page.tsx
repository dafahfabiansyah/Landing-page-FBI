// "use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Partnership from '@/components/section/Partnership'
import Card from '@/components/ui/cardPortfolio'
import { PortfolioData } from '@/data/PortfolioData'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Portfolio - Fresh Beton Indonesia",
  description: "Halaman portfolio Fresh Beton Indonesia",
  icons: {
    icon : "./icon.ico",
  }
};

const page = () => {
  return (
    <section>
    <Header/>
    <section className='overflow-x-hidden pt-20 pb-2 flex flex-col items-center justify-items-center justify-center'>
      <div className='text-center mx-44'>
        <p className='font-bold text-green-500 text-3xl capitalize pb-6'>project portfolio</p>
        <div className="relative mx-10 h-[400px] w-screen" style={{ backgroundImage: `url('/IMG_8274.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      </div>
     </section>
     <p className='font-bold text-lg capitalize pb-6 text-center py-20 mx-44'>Di halaman ini, Anda akan menemukan informasi lengkap tentang profil produk dan layanan yang kami tawarkan.</p>
     <div  data-aos='fade-up' className='gap-4 flex flex-wrap justify-center pb-5  '>
        {PortfolioData.map(portfolio => (
            <Card key={portfolio.id} portfolio={portfolio} />
        ))}
    </div>
    <Partnership/>
   <Footer/>
   </section>
  )
}

export default page