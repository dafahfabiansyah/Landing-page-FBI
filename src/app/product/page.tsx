import Header from '@/components/Header'
import React from 'react'
import Card from '@/components/ui/card';
import { ProductData } from '@/data/ProductData';
import Link from 'next/link';
import Footer from '@/components/Footer';

const Page = () => {
  return (
     <section>
      <Header/>
       <div className='gap-4 flex flex-wrap justify-center py-1 pt-20'>
          {ProductData.map(product => (
              <Card key={product.id} product={product} />
          ))}
      </div>
      <Footer/>
     </section>
  );
}

export default Page