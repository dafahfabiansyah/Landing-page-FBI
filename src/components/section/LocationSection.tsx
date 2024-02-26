"use client"
import React from 'react'
import Link from 'next/link';
import Card from '../ui/cardLocation';
import { LocationData } from '@/data/LocationData';

const LocationSection = () => {
    const limitedLocationData = LocationData.slice(0, 3);

    return (
        <section className='bg-[#FAF5EF] py-4 pb-10 pt-4 border-t border-b border-gray-200'>
        {/* <section className='bg-white py-2 pb-10'> */}
        <h1 className='text-center text-green-600 text-4xl font-bold capitalize'>lokasi kami</h1>
        <p className='text-center text-black text-lg pb-2 font-bold capitalize'>berikut ini adalah lokasi dari perusahaan kami</p>
         <div className='gap-6 flex flex-wrap justify-center'>
            {limitedLocationData.map(location => (
                <Card key={location.id} location={location} />
            ))}
        </div>
        <div className='text-center mt-2'>
            <Link href='/location'>
                <button className='text-white rounded-md p-2 bg-green-500 hover:bg-green-600 transition-all'>View All</button>
            </Link>
        </div>
       </section>
    )
      
};

export default LocationSection