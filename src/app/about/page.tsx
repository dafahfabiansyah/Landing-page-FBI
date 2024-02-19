import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CarouselHero from '@/components/ui/Carousel'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <section className='mx-auto'>
      <Header/>
      {/* <div>
      <CarouselHero/>
      </div> */}
      <div className='flex flex-row container mx-auto py-1 pt-20'>
        <div className='flex justify-end pb-4'>
          <Image src="https://source.unsplash.com/360x200?company" alt='image' width={360} height={200}/>
        </div>
        <div className='flex-1 pl-4'>
          <h1>Ini tentang kami</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus libero nec eros sodales, nec venenatis nisi blandit. In non leo nec purus laoreet tempor.</p>
        </div>
      </div>
      <div className='flex flex-row container mx-auto py-1'>
        <div className='flex justify-end pb-4'>
          <Image src="https://source.unsplash.com/360x200?people" alt='image' width={360} height={200}/>
        </div>
        <div className='flex-1 pl-4'>
          <h1>Ini tentang kami</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus libero nec eros sodales, nec venenatis nisi blandit. In non leo nec purus laoreet tempor.</p>
        </div>
      </div>
      <div className='flex flex-row container mx-auto py-1'>
        <div className='flex justify-end pb-4'>
          <Image src="https://source.unsplash.com/360x200?concrete" alt='image' width={360} height={200}/>
        </div>
        <div className='flex-1 pl-4'>
          <h1>Ini tentang kami</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus libero nec eros sodales, nec venenatis nisi blandit. In non leo nec purus laoreet tempor.</p>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Page
