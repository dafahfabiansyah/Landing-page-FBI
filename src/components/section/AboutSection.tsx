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
    }, 80);

    return () => clearInterval(interval);
  }, [counters]);

  return (
      <section className='bg-[#FAF5EF] items-center justify-center pb-10 container'>
        <h1 className='font-bold text-center text-orange-600 text-4xl pt-3'>About Us</h1>
        <div className='flex flex-col gap-10 pr-5 md:flex-row'>
          <Image src='https://source.unsplash.com/precast' width={300} height={150} alt='about us image' />
          <p>PT. Fresh Beton Indonesia merupakan perusahaan yang bergerak di bidang beton siap pakai (readymix) dan beton pracetak (precast). <br/>
            Fresh Beton Readymix berdiri mulai Maret 2018 dengan mendirikan Permanen Batching Plant di neglasari, Sukabumi. Di dalam 1 area yang sama dengan Quary dan Crusher <span className='hover:underline hover:text-green-800'><Link href="https://gbp-quarry.com/">PT.GBP</Link></span>. Kapasitas batching plant terpasang 60 m3/jam dengan jumlah Armada Truck Mixer 15 unit Kapasitas 7 m3 dan 5 unit Truck minimix.</p>
        </div>
        <div className='flex flex-col gap-10 pr-5 md:flex-row'>
          <div className='text-center pt-4 mt-4 md:mt-0'>
            <Link href='/about'>
              <button className='text-black border-2 border-black rounded-full p-2 bg-white hover:bg-black hover:text-white hover:border-black transition-all capitalize'>tentang perusahaan kami</button>
            </Link>
          </div>
          <p className='  flex justify-center items-center pt-1 pl-14 md:w-screen flex-grow w-10'>
            Kami berdiri dan selalu berinovasi dalam proses, peralatan, penggunaan material untuk memenuhi segala kebutuhan mutu yang disyaratkan. Tenaga Profesional kami akan selalu memberikan Solusi dan saran terbaik 
            dengan pertimbangan quality dan efisien untuk lingkup pekerjaan
          </p>
        </div>
        {/* <div className='pl-5 pt-5 md:pl-72' data-aos="fade-up"> */}
        <div className='pl-5 -pt-5 md:pl-72' data-aos="fade-up">
          <ul className='flex flex-col md:flex-row gap-3'>
            {counters.map((counter, index) => (
              <div key={index} className='border-2 border-slate-400 rounded-full flex flex-col items-center justify-center h-40 w-40 shrink-0 grow-0'>
                <li>{counter.name}</li>
                <p className='transition-all'>{counter.current}+ {index === 1 ? "tahun" : (index === 0 ? "pelanggan" : "proyek")}</p>
              </div>
            ))}
          </ul>
        </div>
      </section>
  );
}

export default AboutSection;
