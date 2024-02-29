"use client"

import React from 'react';
import Link from 'next/link';
import batchingImage from '../../../public/concrete-mixer-concrete-svgrepo-com.png';
import precastImage from '../../../public/concrete.png';
import concreteImage from '../../../public/ICON BATCHPUMP.png';
import pumpImage from '../../../public/ICON concrete pump.png';
import Image from 'next/image';

const ProductSection = () => {
    return (
        <section className='bg-[#FAF5EF] py-10 border-t border-b border-gray-200'>
            <h1 className='text-center text-green-600 text-4xl font-bold capitalize'>produk kami</h1>
            <div className='flex justify-center'>
            <div className='flex flex-row gap-16 w-[700px] items-center'>
        <div className="bottom-1 w-40 h-40">
            <Link href='product/category/batching-plant'>
            <Image src={batchingImage} alt='batching plant'  className='transition-all hover:scale-125' />
            <p className='text-center pt-2 capitalize'>batching plant</p>
            </Link>   
        </div>
        <div className="bottom-1 w-40 h-40">
        <Link href='product/category/concrete-pump'>
            <Image src={concreteImage} alt='concrete pump' className='transition-all hover:scale-125' />
            <p className='text-center pt-2 capitalize'>concrete pump</p>
            </Link>
        </div>
        <div className="bottom-1 w-32 h-32"> 
        <Link href='product/category/precast'>
            <Image src={precastImage} alt='precast' className='transition-all hover:scale-125 pb-2'/>
            <p className='text-center pt-2 capitalize'>precast</p>
            </Link>
        </div>
        <div className="bottom-1 w-40 h-40">
        <Link href='product/category/mobile-batching'>
            <Image src={pumpImage} alt='mobile batching' className='transition-all hover:scale-125' />
            <p className='text-center pt-2 capitalize'>mobile batching</p>
            </Link>
        </div>
    </div>
</div>

        </section>
    );
}

export default ProductSection;

// "use client"
// import React from 'react';
// import Card from '../ui/card';
// import { ProductData } from '@/data/ProductData';
// import Link from 'next/link';
// import batchingImage from '../../../public/concrete-mixer-concrete-svgrepo-com.png';
// import precastImage from '../../../public/concrete.png';
// import concreteImage from '../../../public/ICON BATCHPUMP.png';
// import pumpImage from '../../../public/ICON concrete pump.png';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// // ProductSection component
// const ProductSection = ({ product }: { product: typeof ProductData[number] }) => {
//     const router = useRouter();

//     const navigateToDetail = () => {
//         if (product && product.id) {
//             router.push(`/product/category/${product.id}`);
//         }
//     };

//     return (
//         <section className='bg-[#FAF5EF] py-10 border-t border-b border-gray-200'>
//             <h1 className='text-center text-green-600 text-4xl font-bold capitalize'>produk kami</h1>
//             <div className='flex justify-center'>
//                 <div className='flex flex-row gap-16 w-[700px] items-center'>
//                     <div className="bottom-1 w-40 h-40" onClick={navigateToDetail}>
//                         <Image src={batchingImage} alt='batching plant' className='transition-all hover:scale-125' />
//                         <p className='text-center pt-2 capitalize'>batching plant</p>
//                     </div>
//                     <div className="bottom-1 w-40 h-40" onClick={navigateToDetail}>
//                         <Image src={concreteImage} alt='concrete pump' className='transition-all hover:scale-125' />
//                         <p className='text-center pt-2 capitalize'>concrete pump</p>
//                     </div>
//                     <div className="bottom-1 w-32 h-32" onClick={navigateToDetail}> 
//                         <Image src={precastImage} alt='precast' className='transition-all hover:scale-125 pb-2'/>
//                         <p className='text-center pt-2 capitalize'>precast</p>
//                     </div>
//                     <div className="bottom-1 w-40 h-40" onClick={navigateToDetail}>
//                         <Image src={pumpImage} alt='mobile batching' className='transition-all hover:scale-125' />
//                         <p className='text-center pt-2 capitalize'>mobile batching</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


// export default ProductSection;
