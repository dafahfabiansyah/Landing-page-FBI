import React from 'react'
import { ProductData } from '@/data/ProductData';

const Card = ({ product }: { product: typeof ProductData[number] }) => {
    return (
        // <div className=" w-1/3 p-4">
        <div className=" border border-gray-500 rounded-md">
            {/* <Link></Link> */}
            <img src={product.image} alt={product.name} className="rounded-t-md transition duration-500 hover:scale-110 justify-center flex items-center w-80 mb-2" />
            <div className="text-center bg-green-600 rounded-b-md">
            <div>{product.name}</div>
            <div>{product.price}</div>
            </div>
        </div>
    );
};


export default Card