import React from 'react'
import { ProductData } from '@/data/ProductData';

const Card = ({ product }: { product: typeof ProductData[number] }) => {
    return (
        // <div className=" w-1/3 p-4">
        <div className="bg-white border-solid border-2 rounded-md">
            {/* <Link></Link> */}
            <img src={product.image} alt={product.name} className="p-2 rounded-t-md transition duration-500 hover:scale-110 justify-center flex items-center w-80 mb-2" />
            <div className="text-center bg-[#6D8B74] rounded-b-md">
                <div className='text-white py-4'>{product.name}</div>
                {/* <div className='text-white'>{product.price}</div> */}
            </div>
        </div>
    );
};

export default Card;
