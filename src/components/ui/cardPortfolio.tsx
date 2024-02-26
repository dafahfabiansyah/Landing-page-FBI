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
        <div data-aos="fade-up" className="flex flex-col bg-white border-solid border-2 rounded-md overflow-hidden shadow-md m-2">
            <div className="relative h-40 w-96">
                <Image
                    src={portfolio.image}
                    alt={portfolio.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 hover:scale-110"
                />
                 <button onClick={navigateToDetail} className='z-10 absolute  right-0 backdrop-blur-3xl hover:bg-white transition-all text-green-600 py-2 mt-14 rounded-lg text-center flex justify-center focus:outline-none'><CaretRight size={32} /></button>
            </div>
            <div className="flex flex-col justify-between p-4 w-full">
                <div>
                    <h1 className='capitalize text-black text-xl font-semibold mb-2'>{portfolio.name}</h1>
                    <p className='text-black mb-4'>{portfolio.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
