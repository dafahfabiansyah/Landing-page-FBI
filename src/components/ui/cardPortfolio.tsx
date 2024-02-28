import React from 'react';
import { PortfolioData } from '@/data/PortfolioData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CaretRight } from '@phosphor-icons/react';

const Card = ({ portfolio }: { portfolio: typeof PortfolioData[number] }) => {
    const router = useRouter();

    const navigateToDetail = () => {
        router.push(`/portfolio/detail/${portfolio.id}`);
    };

    return (
        <div className="bg-white border-solid border-2 rounded-md shadow-md w-96">
             <div className="cursor-pointer h-40 relative">
                <Image
                    src={portfolio.image}
                    alt={portfolio.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 hover:scale-110 rounded-t-md"
                    onClick={navigateToDetail}
                />
            </div>
            <div className="flex flex-col justify-between text-center p-4 w-full">
                <div>
                    <h1 className='capitalize text-black text-xl font-semibold mb-2'>{portfolio.name}</h1>
                    <p className='text-black mb-1'>{portfolio.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
