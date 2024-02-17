import Header from '@/components/Header'
import React from 'react'
import Card from '@/components/ui/card';
import { ProductData } from '@/data/ProductData';
import Link from 'next/link';

const Page = () => {
  return (
     <section>
      <Header/>
       <div className='gap-4 flex flex-wrap justify-center py-1 pt-20'>
          {ProductData.map(product => (
              <Card key={product.id} product={product} />
          ))}
      </div>
      <div className='text-center mt-4'> {/* Container untuk tombol */}
          <Link href='/product'>
              <button className='underline mb-2'>View All</button>
          </Link>
      </div>
     </section>
  );
}

export default Page