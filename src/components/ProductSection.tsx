import React from 'react';
import testIcon from '../../public/IMG_8274.png';
import Card from './ui/card';
import Link from 'next/link';
import { ProductData } from '@/data/ProductData';

const ProductSection = () => {
    // Batasi data produk menjadi 6 elemen
    const limitedProductData = ProductData.slice(0, 3);

    return (
       <section>
         <div className='gap-4 flex flex-wrap justify-center'>
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
