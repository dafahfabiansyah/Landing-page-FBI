import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
  return (
    <>
     {/* about us */}
     <section className='flex flex-col items-center justify-center pb-10'>
        <h1 className='font-bold text-center text-orange-600 text-4xl'>About Us</h1>
        <p className='text-center flex justify-center items-center pt-3'>
        PT. Fresh Beton Indonesia merupakan perusahaan yang bergerak di bidang beton siap pakai (readymix) dan beton pracetak (precast).
Fresh Beton Readymix berdiri mulai Maret 2018 dengan mendirikan Permanen Batching Plant di neglasari, Sukabumi. Di dalam 1 area yang sama dengan Quary dan Crusher PT.GBP. Kapasitas batching plant terpasang 60 m3/jam dengan jumlah Armada Truck Mixer 15 unit Kapasitas 7 m3 dan 5 unit Truck minimix.
        </p>
        <div className='text-center mt-4'> 
            <Link href='/about'>
                <button className='text-white rounded-md p-2 bg-emerald-400 hover:bg-emerald-700 transition-all'>View All</button>
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