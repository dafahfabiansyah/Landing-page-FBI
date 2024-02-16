// Import dependencies
import React from 'react';
import { PortfolioData } from '@/data/PortfolioData';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
        <div className='pt-2 pb-5'>
        <div>ID: {id}</div>
        {/* Access product data using the parsed id */}
        <div>nama: {PortfolioData[portfolioId - 1].name}</div>
        {/* Use the parsed id to access the image */}
        <div className='flex items-center justify-center justify-items-center'>
        <Image src={PortfolioData[portfolioId - 1].image} alt={PortfolioData[portfolioId- 1].name} />
        </div>
        <div>deskripsi: {PortfolioData[portfolioId - 1].description}</div>
        </div>
        <Footer/>
      </div>
    );
  }

  export default Page