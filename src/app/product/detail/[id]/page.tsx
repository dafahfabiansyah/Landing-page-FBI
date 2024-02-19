// Import dependencies
import React from 'react';
import { ProductData } from '@/data/ProductData';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageParams {
  id: string;
}

const Page = ({ params }: { params: PageParams }) => {
  const { id } = params;
  const productId = parseInt(id, 10);

  return (
    <div>
      <Header />
      <div className='container mx-auto pt-20 pb-5'>
        {/* Displaying the 'id' value */}
        <div className='text-center text-3xl font-bold'>Product Details</div>
        {/* <div className='mt-5'>
          <div className='text-xl'>ID: {id}</div>
          <div className='text-xl'>Nama: {ProductData[productId - 1].name}</div>
          <div className='text-lg'>Deskripsi: {ProductData[productId - 1].description}</div>
        </div> */}
        {/* Display product image */}
        <div className='flex items-center justify-center mt-5'>
          <Image src={ProductData[productId - 1].image} alt={ProductData[productId - 1].name} width={400} height={400} />
        </div>
        <div className='mt-5 '>
          {/* <div className='text-xl'>ID: {id}</div> */}
          <div className='text-xl text-center'>{ProductData[productId - 1].name}</div>
          <div className='text-lg'>{ProductData[productId - 1].description}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
