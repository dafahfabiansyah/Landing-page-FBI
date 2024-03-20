import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Card from './CardReadyMix'
import { ReadyMixData } from '@/data/ProductCategoriesData'

const Page = () => {
  return (
    <section>
    <Header/>
     <div className='gap-10 flex flex-wrap justify-center pt-20 pb-5  '>
        {ReadyMixData.map(readymix => (
            <Card key={readymix.id} readymix={readymix} />
        ))}
    </div>
   <Footer/>
   </section>
  )
}

export default Page