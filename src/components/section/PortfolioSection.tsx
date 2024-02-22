"use client"
import React from 'react'
import Link from 'next/link';
import Card from '../ui/cardPortfolio';
import { PortfolioData } from '@/data/PortfolioData';

const PortfolioSection = () => {
    const limitedProductData = PortfolioData.slice(0, 3);

    return (
        // <section className='bg-white pb-10'>
        <section className='bg-[#FAF5EF] pb-10'>
        <h1 className='text-center text-orange-600 pb-4 text-4xl font-bold capitalize'>portofolio</h1>
        <p className='text-center text-black text-xl pb-2 font-bold capitalize'>berikut ini adalah proyek yang telah dikerjakan</p>
         <div className='gap-6 flex flex-wrap justify-center'>
            {limitedProductData.map(portfolio => (
                <Card key={portfolio.id} portfolio={portfolio} />
            ))}
        </div>
        <div className='text-center mt-4'>
            <Link href='/portfolio'>
                <button className='text-white rounded-md p-2 bg-lime-400 hover:bg-lime-500 transition-all'>View All</button>
            </Link>
        </div>
       </section>
    )
      
};

export default PortfolioSection