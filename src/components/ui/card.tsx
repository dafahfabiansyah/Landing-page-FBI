"use client"

import React from 'react';
import { ProductData } from '@/data/ProductData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Card = ({ product }: { product: typeof ProductData[number] }) => {
    const router = useRouter();

    const navigateToDetail = () => {
        router.push(`/product/detail/${product.id}`);
    };

    return (
        <div className="bg-white border-solid border-2 rounded-md w-80">
            <div onClick={navigateToDetail} className="cursor-pointer">
                <div className="h-72 relative rounded-t-md overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition duration-500 hover:scale-110"
                    />
                </div>
            </div>
            <div className="text-center bg-[#6D8B74] rounded-b-md">
                <div className='capitalize text-white py-4 truncate'>{product.name}</div>
                {/* You can remove the button for detail */}
            </div>
        </div>
    );
};

export default Card;


// const Card = ({ product }: { product: typeof ProductData[number] }) => {
//     const router = useRouter()
//     return (
//         // <div className=" w-1/3 p-4">
//         <div className="bg-white border-solid border-2 rounded-md">
//             {/* <Link href={`/product/detail/${product.id}`} onClick={() => router.push(`/product/detail/${product.id}`)}> */}
//             <Image src={product.image} alt={product.name} className="h-full max-h-72 p-2 rounded-t-md transition duration-500 hover:scale-110 justify-center flex items-center w-80 mb-2" />
//             {/* <Link href={`/product/detail/${product.id}`}>
//             </Link> */}
//             <div className="text-center bg-[#6D8B74] rounded-b-md">
//                 <div className='capitalize text-white py-4'>{product.name}</div>
//                 <button onClick={() => router.push(`/product/detail/${product.id}`)}>detail</button>
//                 {/* <div className='text-white'>{product.price}</div> */}
//             </div>
//         </div>
//     );
// };
