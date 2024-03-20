import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Card from './CardPrecast'
import { PrecastData } from '@/data/ProductCategoriesData'

const Page = () => {
  return (
    <section>
    <Header/>
     <div className='gap-10 flex flex-wrap justify-center pt-20 pb-5  '>
        {PrecastData.map(precast => (
            <Card key={precast.id} precast={precast} />
        ))}
    </div>
   <Footer/>
   </section>
  )
}

export default Page