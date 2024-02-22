import React from 'react';
import { PortfolioData } from '@/data/PortfolioData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Card = ({ portfolio }: { portfolio: typeof PortfolioData[number] }) => {
    const router = useRouter();

    const navigateToDetail = () => {
        router.push(`/portfolio/detail/${portfolio.id}`);
    };

    return (
        <div data-aos="fade-up" className="bg-white border-solid border-2 rounded-md overflow-hidden shadow-md w-80 m-2">
            <div onClick={navigateToDetail} className="cursor-pointer h-40 relative">
                <Image
                    src={portfolio.image}
                    alt={portfolio.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h1 className='capitalize text-black text-xl font-semibold mb-2'>{portfolio.name}</h1>
                <p className='text-black mb-4'>{portfolio.description}</p>
                <button onClick={navigateToDetail} className='bg-blue-500 hover:bg-blue-600 transition-all text-white py-2 px-4 rounded-md focus:outline-none'>Details</button>
            </div>
        </div>
    );
};

export default Card;
