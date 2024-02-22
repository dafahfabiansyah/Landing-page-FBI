"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutSection = () => {
  // State untuk menyimpan informasi masing-masing counter
  const [counters, setCounters] = useState([
    { name: 'Customer', current: 0, max: 100, increaseFactor: 1 },
    { name: 'Pengalaman', current: 0, max: 20, increaseFactor: 0.5 },
    { name: 'Proyek', current: 0, max: 100, increaseFactor: 2 },
  ]);

  // Effect untuk mengupdate nilai counter secara berkala
  useEffect(() => {
    const interval = setInterval(() => {
      // Mengupdate nilai setiap counter
      const updatedCounters = counters.map(counter => ({
        ...counter,
        current: counter.current < counter.max ? counter.current + counter.increaseFactor : counter.current
      }));
      setCounters(updatedCounters);
    }, 80); // Interval dalam milidetik, di sini setiap detik nilai akan bertambah 1

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(interval);
  }, [counters]); // Effect akan dipanggil ketika salah satu dari state diubah

  return (
      <section className='bg-[#FAF5EF] items-center justify-center pb-10 container'>
        <h1 className='font-bold text-center text-orange-600 text-4xl pt-3'>About Us</h1>
        <div className='flex flex-row gap-10 pr-5'>
          <Image src='https://source.unsplash.com/precast' width={300} height={150} alt='about us image' />
          <p>PT. Fresh Beton Indonesia merupakan perusahaan yang bergerak di bidang beton siap pakai (readymix) dan beton pracetak (precast). <br/>
            Fresh Beton Readymix berdiri mulai Maret 2018 dengan mendirikan Permanen Batching Plant di neglasari, Sukabumi. Di dalam 1 area yang sama dengan Quary dan Crusher PT.GBP. Kapasitas batching plant terpasang 60 m3/jam dengan jumlah Armada Truck Mixer 15 unit Kapasitas 7 m3 dan 5 unit Truck minimix.</p>
        </div>
        <div className='flex flex-row gap-10 pr-5'>
          <div className='text-center mt-4'>
            <Link href='/about'>
              <button className='text-black border-2 border-black rounded-full p-2 bg-white hover:bg-black hover:text-white hover:border-black transition-all capitalize'>tentang perusahaan kami</button>
            </Link>
          </div>
          <p className='flex justify-center items-center pt-3 pl-2 flex-grow w-10'>
            Kami berdiri dan selalu berinovasi dalam proses, peralatan, penggunaan material untuk memenuhi segala kebutuhan mutu yang disyaratkan. Tenaga Profesional kami akan selalu memberikan Solusi dan saran terbaik 
            dengan pertimbangan quality dan efisien untuk lingkup pekerjaan
          </p>
        </div>
        <div className='pl-72 pt-5' data-aos="fade-up">
          <ul className='flex flex-row gap-3'>
            {counters.map((counter, index) => (
              <div key={index} className='border-2 border-slate-400 rounded-full flex flex-col items-center justify-center h-60 w-60 shrink-0 grow-0'>
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
