import React from 'react';
import Card from '../ui/card';
import Link from 'next/link';
import { ProductData } from '@/data/ProductData';

const ProductSection = () => {
    // Batasi data produk menjadi 6 elemen
    const limitedProductData = ProductData.slice(0, 3);

    return (
    //    <section className='bg-white block pb-10'>
       <section className='bg-[#FAF5EF] block py-10 border-t border-b border-gray-200'>
        <h1 className='text-center text-green-600 text-4xl font-bold capitalize'>produk kami</h1>
         {/* <p className='text-center text-black text-xl pb-2 font-bold capitalize'>berikut ini adalah produk dari perusahaan kami</p> */}
         <div className='gap-6 flex flex-wrap justify-center'>
            {limitedProductData.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
        <div className='text-center mt-4'> {/* Container untuk tombol */}
            <Link href='/product'>
            <button className='text-white rounded-md p-2 bg-green-500 hover:bg-green-600 transition-all'>View All</button>
            </Link>
        </div>
       </section>
    );
}



export default ProductSection;
