"use client";

import React from "react";
import Link from "next/link";
import mobilebatch from "../../../public/batching plant (4).png";
import batchingImage from "../../../public/concrete-mixer-concrete-svgrepo-com.png";
import precastImage from "../../../public/concrete.png";
import concreteImage from "../../../public/ICON BATCHPUMP.png";
import pumpImage from "../../../public/ICON concrete pump.png";
import Image from "next/image";

const ProductSection = () => {
  return (
    <section className="bg-[#FAF5EF] py-10 border-t border-b border-gray-200">
      <h1 className="text-center text-green-600 text-4xl font-bold capitalize">
        our product
      </h1>
      <div className="flex justify-center">
        <div className="flex justify-between gap-10 lg:flex-row flex-wrap">
          <div className="flex flex-col items-center">
            <a href="product">
              <Image
                src={batchingImage}
                alt="truck mixer"
                className="w-40 transition-all hover:scale-110 h-40 object-cover"
              />
              <p className="text-center mt-2 capitalize">ready mix concrete</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="product">
              <Image
                src={pumpImage}
                alt="concrete pump"
                className="w-40 pt-9 transition-all hover:scale-110 h-40 object-cover"
              />
              <p className="text-center mt-2 capitalize">concrete pump</p>
            </a>
          </div>
          <div className="flex flex-col w-40 h-40 pt-10 items-center">
            <a href="product">
              <Image
                src={precastImage}
                alt="precast"
                className="w-24 transition-all hover:scale-110 h-24 object-cover"
              />
              <p className="text-center mt-2 pt-6 capitalize">precast</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="product">
              <Image
                src={mobilebatch}
                alt="batching plant"
                className="w-32 transition-all hover:scale-110 h-32 mb-2 mt-4 object-cover"
              />
              <p className="text-center mt-6 capitalize">batching plant</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="product">
              <Image
                src={concreteImage}
                alt="mobile batching plant"
                className="w-40 transition-all pt-10 hover:scale-110 h-40 object-cover"
              />
              <p className="text-center mt-2 capitalize">
                mobile batching plant
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

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
