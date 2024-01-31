import React from 'react'
import { PortfolioData } from '@/data/PortfolioData';
import Image from 'next/image';

const Card = ({ portfolio }: { portfolio: typeof PortfolioData[number] }) => {
    return (
        // <div className=" w-1/3 p-4">
        <div className="bg-white border-solid border-2 rounded-md">
            {/* <Link></Link> */}
            <Image src={portfolio.image} alt={portfolio.name} className=" max-h-72 p-2 rounded-t-md transition duration-500 hover:scale-110 justify-center flex items-center w-80 mb-2" />
            <div className="text-center bg-[#6D8B74] rounded-b-md">
                <div className='capitalize text-white py-1'>{portfolio.name}</div>
                <div className='text-white'>{portfolio.description}</div>
            </div>
        </div>
    );
};

export default Card;
