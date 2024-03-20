import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Card from './CardPrecast'
import { PrecastData } from '@/data/ProductCategoriesData'

const Page = () => {
  return (
    <section>
    <Header/>
    {/* <section className='overflow-x-hidden pt-20 pb-2 flex flex-col items-center justify-items-center justify-center'>
        <p className='font-bold text-green-500 text-3xl capitalize pt-[450px]'>project portfolio</p>
     </section> */}
     {/* <p className='font-bold text-lg capitalize pb-6 text-center py-12 mx-44'>Di halaman ini, Anda akan menemukan informasi lengkap tentang profil produk dan layanan yang kami tawarkan.</p> */}
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