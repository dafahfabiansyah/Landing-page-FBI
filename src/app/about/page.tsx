import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <section>
      <Header/>
      <div className='flex flex-row container mx-auto'>
        <div className='flex justify-end pb-4'>
          <Image src="https://source.unsplash.com/360x200" alt='image' width={360} height={200}/>
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
