// Import dependencies
import React from 'react';
import { PortfolioData } from '@/data/PortfolioData';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Location - ${PortfolioData[0].name}`,
  description: "Halaman portfolio Fresh Beton Indonesia",
  icons: {
    icon : "./icon.ico",
  }
};
interface PageParams {
    id: string; 
  }
const Page = ({ params }: { params: PageParams }) => {
    const { id } = params;
  
    // Parse the id into a number
    const portfolioId = parseInt(id, 10); // Using parseInt with radix 10
  
    return (
      <div>
        <Header/>
        {/* Displaying the 'id' value */}
        <div className='pb-5 container pt-20'>
        {/* <div>ID: {id}</div> */}
        {/* Access product data using the parsed id */}
        <h1 className='text-3xl font-bold mb-4'>{PortfolioData[portfolioId - 1].name}</h1>
        {/* Use the parsed id to access the image */}
        <div className='flex items-center justify-center'>
            <Image src={PortfolioData[portfolioId - 1].image} alt={PortfolioData[portfolioId - 1].name} width={400} height={300} />
          </div>
        <div className='capitalize'>{PortfolioData[portfolioId - 1].description}</div>
        </div>
        <Footer/>
      </div>
    );
  }

  export default Page