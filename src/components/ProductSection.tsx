import React from 'react';
import testIcon from '../../public/IMG_8274.png';
import Card from './ui/card';
import Link from 'next/link';
import { ProductData } from '@/data/ProductData';

const ProductSection = () => {
    // Batasi data produk menjadi 6 elemen
    const limitedProductData = ProductData.slice(0, 3);

    return (
       <section className='bg-white'>
        <h1 className='text-center text-orange-600 pb-4 text-4xl font-bold capitalize'>produk kami</h1>
         <div className='gap-6 flex flex-wrap justify-center'>
            {limitedProductData.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
        <div className='text-center mt-4'> {/* Container untuk tombol */}
            <Link href='/product'>
                <button className='underline py-3'>View All</button>
            </Link>
        </div>
       </section>
    );
}



export default ProductSection;
