"use client"
import React from 'react'
import Link from 'next/link';
import Card from '../ui/cardLocation';
import { LocationData } from '@/data/LocationData';

const LocationSection = () => {
    const limitedLocationData = LocationData.slice(0, 3);

    return (
        <section className='bg-white py-2 pb-10'>
        <h1 className='text-center text-orange-600 pb-4  text-4xl font-bold capitalize'>lokasi kami</h1>
         <div className='gap-6 flex flex-wrap justify-center'>
            {limitedLocationData.map(location => (
                <Card key={location.id} location={location} />
            ))}
        </div>
        <div className='text-center mt-4'>
            <Link href='/location'>
                <button className='text-white rounded-md p-2 bg-lime-400 hover:bg-lime-500 transition-all'>View All</button>
            </Link>
        </div>
       </section>
    )
      
};

export default LocationSection