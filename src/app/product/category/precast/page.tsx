import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Card from './CardPrecast'
import { PrecastData } from '@/data/ProductCategoriesData'
import Image from 'next/image'

const Page = () => {
  return (
    <section className="overflow-x-hidden">
      <Header />
        <div className="absolute inset-0 z-0 h-[500px] flex items-center justify-center">
          <Image src='/Precast.jpg' alt="" layout="fill" className="flex items-center justify-center"/>
        </div>
        <div className="gap-10 flex flex-wrap justify-center pt-[550px] pb-5 relative z-10">
        {PrecastData.map(precast => (
            <Card key={precast.id} precast={precast} />
        ))}
     </div>
      <Footer />
    </section>
  )
}

export default Page