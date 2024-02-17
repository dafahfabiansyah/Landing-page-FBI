import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
  return (
    <>
     {/* about us */}
     <section className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold text-center'>About Us</h1>
        <p className='text-center flex justify-center items-center pt-3'>
        PT. Fresh Beton Indonesia merupakan perusahaan yang bergerak di bidang beton siap pakai (readymix) dan beton pracetak (precast).
        </p>
        <div className='text-center mt-4'> 
            <Link href='/about'>
                <button className='text-white rounded-md p-2 bg-[#FF480C]'>View All</button>
            </Link>
        </div>
        {/* <Link href='/about'>
          <button className='bg-orange-600 flex items-center justify-center text-white px-4 py-2 rounded'>read more</button>
        </Link> */}
      </section>
    </>
  )
}

export default AboutSection