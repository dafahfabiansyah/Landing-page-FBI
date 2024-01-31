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
  
    // Parse the id into a number
    const productId = parseInt(id, 10); // Using parseInt with radix 10
  
    return (
      <div>
        <Header/>
        {/* Displaying the 'id' value */}
        <div className='pt-2 pb-5'>
        <div>ID: {id}</div>
        {/* Access product data using the parsed id */}
        <div>nama: {ProductData[productId - 1].name}</div>
        {/* Use the parsed id to access the image */}
        <Image src={ProductData[productId - 1].image} alt={ProductData[productId - 1].name} />
        </div>
        <Footer/>
      </div>
    );
  }

  export default Page

  //   const Page = ({ params }: { params: PageParams }) => {
//     const { id } = params;
  
//     return (
//       <div>
//         {/* Menampilkan nilai 'id' */}
//         <div>ID: {id}</div>
//         <div>nama: {ProductData[id - 1].name}</div>
//         <Image src={ProductData[id - 1].image} alt={ProductData[id - 1].name} />
//       </div>
//     );
//   }

// export default Page;