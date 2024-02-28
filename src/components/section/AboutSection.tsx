"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  const [counters, setCounters] = useState([
    { name: 'Customer', current: 0, max: 100, increaseFactor: 1 },
    { name: 'Pengalaman', current: 0, max: 20, increaseFactor: 0.5 },
    { name: 'Proyek', current: 0, max: 100, increaseFactor: 2 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCounters = counters.map(counter => ({
        ...counter,
        current: counter.current < counter.max ? counter.current + counter.increaseFactor : counter.current
      }));
      setCounters(updatedCounters);
    }, 9);

    return () => clearInterval(interval);
  }, [counters]);

  return (
      // <section className='bg-[#FAF5EF] pt-10 items-center justify-center pb-10 container'>
      <section className='bg-white py-10 items-center justify-center '>
        <h1 className='font-bold text-center text-green-600 text-4xl py-3'>Tentang Kami</h1>
        <div className='flex flex-col gap-10 pr-5 md:flex-row container'>
          <Image src='https://source.unsplash.com/precast' width={300} height={150} alt='about us image' />
          <p className='text-justify'><span className='font-bold'>PT. Fresh Beton Indonesia</span> merupakan perusahaan yang bergerak di bidang beton siap pakai (readymix) dan beton pracetak (precast). <br/>
            Fresh Beton Readymix berdiri mulai Maret 2018 dengan mendirikan Permanen Batching Plant di neglasari, Sukabumi. Di dalam 1 area yang sama dengan Quary dan Crusher <span className='hover:underline hover:text-green-800'><Link href="https://gbp-quarry.com/">PT.GBP</Link></span>. Kapasitas batching plant terpasang 60 m3/jam dengan jumlah Armada Truck Mixer 15 unit Kapasitas 7 m3 dan 5 unit Truck minimix.</p>
        </div>
        <div className='flex flex-col gap-10 pr-5 md:flex-row'>
          <p className='container text-justify flex justify-center items-center py-4 md:w-screen flex-grow w-10'>
            Kami berdiri dan selalu berinovasi dalam proses, peralatan, penggunaan material untuk memenuhi segala kebutuhan mutu yang disyaratkan. Tenaga Profesional kami akan selalu memberikan Solusi dan saran terbaik 
            dengan pertimbangan quality dan efisien untuk lingkup pekerjaan
          </p>
        </div>
        {/* <div className='pl-5 pt-5 md:pl-72' data-aos="fade-up"> */}
        <div className='bg-green-600 border-4 justify-center items-center flex'>
        <div className='py-5' data-aos="fade">
          <ul className='flex flex-col md:flex-row gap-52'>
            {counters.map((counter, index) => (
              <div key={index} className='flex flex-col items-center justify-center h-40 w-56'>
                <p className='transition-all text-4xl font-bold text-black'>{counter.current}+ {index === 1 ? "" : (index === 0 ? "" : "")}</p>
                <li className='text-xl'>{counter.name}</li>
              </div>
            ))}
          </ul>
        </div>
        </div>
      </section>
  );
}

export default AboutSection;
