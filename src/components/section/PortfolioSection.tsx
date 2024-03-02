"use client"
import React from 'react'
import Link from 'next/link';
import Card from '../ui/cardPortfolio';
import { PortfolioData } from '@/data/PortfolioData';

const PortfolioSection = () => {
    const limitedProductData = PortfolioData.slice(0, 20);

    return (
        <section className='bg-white border-b py-10'>
        <h1 className='text-center text-green-600 pb-7 text-4xl font-bold capitalize'>portofolio</h1>
        <div className='marquee-container'>
            <div className='marquee'>
        <div className='partner-item gap-6 flex flex-row justify-center'>
            {limitedProductData.map(portfolio => (
                <Card key={portfolio.id} portfolio={portfolio} />
            ))}
            </div>
            </div>
        </div>
       </section>
    )
      
};

export default PortfolioSection