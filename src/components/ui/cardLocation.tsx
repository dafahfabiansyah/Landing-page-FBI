import React from 'react';
import { LocationData } from '@/data/LocationData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Card = ({ location }: { location: typeof LocationData[number] }) => {
    const router = useRouter();

    const navigateToDetail = () => {
        router.push(`/location/detail/${location.id}`);
    };

    const redirectToUrl = () => {
        // Open the URL in a new tab
        window.open(location.urlAddress, '_blank');
    };

    return (
        <div data-aos="fade-up" className="bg-white border-solid border-2 rounded-md overflow-hidden shadow-xl w-80 m-2">
            <div onClick={redirectToUrl} className="cursor-pointer h-40 relative">
                <Image
                    src={location.image}
                    alt={location.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 hover:scale-110"
                />
                <p className='absolute bottom-2 right-2 bg-green-500 text-white px-2 rounded-sm'>{location.id}</p>
            </div>
            <div className="p-4 text-center">
                <h1 className='capitalize text-black text-xl font-semibold mb-2'>{location.title}</h1>
                {/* <p className='text-black mb-4'>{location.address}</p> */}
                <button onClick={navigateToDetail} className='bg-green-500 hover:bg-green-600 transition-all text-white py-2 px-4 rounded-md focus:outline-none'>Details</button>
            </div>
        </div>
    );
};

export default Card;
