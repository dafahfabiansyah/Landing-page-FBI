import React from 'react';
import { LocationData } from '@/data/LocationData';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const metadata: Metadata = {
  title: `Location - ${LocationData[0].title}`,
  description: `batching plants in the area ${LocationData[0].address}`,
  icons: {
    icon : "./icon.ico",
  }
};

interface PageParams {
    id: string; 
  }

  const Page = ({ params }: { params: PageParams }) => {
        const { id } = params;
      
        // Parse the id into a number
        const locationId = parseInt(id, 10);  // Using parseInt with radix 10
  
    return (
      <div>
      <Header />
      <div className='container mx-auto px-4 pt-20'>
        <div className='flex'>
            {/* Main content */}
            <div className='pt-10 pb-5'>
              <span className='text-3xl capitalize flex font-bold mb-2 justify-center items-center'>{LocationData[locationId- 1].title}</span>
              <div className='flex flex-row mx-8 gap-4'>
                <Link href={`/news/category/${LocationData[locationId - 1].title}`}>
              {/* <p className='mb-4 pr-1 capitalize text-grey-600 bg-gray-100 hover:bg-gray-200 rounded-full px-1 hover:text-gray-700 transition-all'>{LocationData[locationId- 1].id}</p> */}
                </Link>
              {/* <p className='flex flex-col text-gray-500 decoration-indigo-500'>{LocationData[locationId - 1].}</p> */}
              </div>
              <div className='flex items-center justify-center mb-4'>
                <Image width={800} height={700} src={LocationData[locationId - 1].image} alt={LocationData[locationId- 1].title} />
              </div>
              <article className='flex flex-col gap-5'>
                  <p className='text-lg mx-20 text-justify'>{LocationData[locationId - 1].address}</p>
              </article>
            </div>
          </div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
    );
  }

  export default Page;
