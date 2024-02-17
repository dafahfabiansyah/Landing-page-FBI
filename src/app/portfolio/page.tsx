"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Card from '@/components/ui/cardPortfolio'
import { PortfolioData } from '@/data/PortfolioData'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section>
    <Header/>
     <div className='gap-4 flex flex-wrap justify-center py-1 pt-20 '>
        {PortfolioData.map(portfolio => (
            <Card key={portfolio.id} portfolio={portfolio} />
        ))}
    </div>
   <Footer/>
   </section>
  )
}

export default page