"use client"
import React from 'react'
import Link from 'next/link';
import Card from '../ui/cardPortfolio';
import { PortfolioData } from '@/data/PortfolioData';

const PortfolioSection = () => {
    const limitedProductData = PortfolioData.slice(0, 2);

    return (
        // <section className='bg-white pb-10'>
        <section className='bg-[#FAF5EF] py-10 pb-20 pl-24 container'>
        <h1 className='text-center text-orange-600 pb-7 text-4xl font-bold capitalize'>portofolio</h1>
    <div className='flex flex-row'>
        <div className='flex flex-col'>
        <p className='text-black text-lg pb-2 font-bold capitalize w-60'>memberikan produk terbaik untuk anda yang ingin membangun dan menciptakan proyek yang akan menningkatkan kualitas perusahaan anda.</p>
        <div className='text-center mt-4'>
            <Link href='/portfolio'>
                <button className='text-black border-2 border-black rounded-full p-2 bg-white hover:bg-black hover:text-white hover:border-black transition-all capitalize'>lihat semua</button>
            </Link>
        </div>
        </div>
         <div className='gap-6 flex flex-wrap justify-center'>
            {limitedProductData.map(portfolio => (
                <Card key={portfolio.id} portfolio={portfolio} />
            ))}
        </div>
            </div>
       </section>
    )
      
};

export default PortfolioSection