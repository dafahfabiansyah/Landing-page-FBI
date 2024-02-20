// Import dependencies
import React from 'react';
import { LocationData } from '@/data/LocationData';
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
        <div className='pt-20 pb-5'>
        <div>ID: {id}</div>
        {/* Access product data using the parsed id */}
        <div>nama: {LocationData[portfolioId - 1].title}</div>
        {/* Use the parsed id to access the image */}
        <div className='flex items-center justify-center justify-items-center'>
        <Image src={LocationData[portfolioId - 1].image} alt={LocationData[portfolioId- 1].title} />
        </div>
        <div>deskripsi: {LocationData[portfolioId - 1].address}</div>
        </div>
        <Footer/>
      </div>
    );
  }

  export default Page