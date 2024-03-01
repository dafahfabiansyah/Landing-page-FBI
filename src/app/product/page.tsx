import Header from '@/components/Header';
import React from 'react';
import Card from '@/components/ui/card';
import { ProductData } from '@/data/ProductData';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/section/ServicesSection';
import Image from 'next/image';
import ServicesTable from '@/components/ServicesTable';

const Page = () => {
  return (
    <div>
      <Header />
      <section className='overflow-x-hidden pt-20 pb-2 flex flex-col items-center justify-items-center justify-center'>
      <div className='w-screen my-10'>
        <h1 className='font-bold text-center text-green-500 text-3xl capitalize'>tabel kualitas</h1>
        <p className='capitalize text-justify mx-10 py-4'><span className='font-bold'>PT. Fresh Beton Indonesia</span> adalah perusahaan swasta nasional yang bergerak di bidang beton siap pakai. Didirikan sejak tahun 2017, kami telah dipercaya oleh kontraktor Nasional, BUMN dan kontraktor internasional karena mampu memasok 
        beton untuk proyek-proyek strategis dengan kualitas dan pelayanan yang memuaskan.</p>
        <article className='capitalize text-justify mx-10 pb-3'><span className='font-bold'>PT. Fresh Beton Indonesia</span> memproduksi beton siap 
        pakai dengan spesifikasi yang tertera di bawah ini:</article>
       <ServicesTable/>
      </div>
      <div className='w-screen'>
        <h1 className='font-bold text-center text-green-500 text-3xl capitalize'>kelas mutu beton</h1>
        <p className='capitalize text-justify mx-44 py-4'>Mutu beton K dan FC adalah dua cara untuk mengukur kuat tekan beton.
        Kuat tekan merupakan salah satu sifat penting beton yang menunjukkan kemampuannya untuk menahan beban tekan</p>
      </div>
      <div className='w-screen py-8'>
        <h1 className='font-bold mx-44 text-green-500 text-3xl capitalize'>mutu beton K:</h1>
        <p className='capitalize text-justify mx-44 py-2'>Mutu beton K diukur dalam satuan kg/cm². 
        Nilai mutu beton K menunjukkan kuat tekan beton dalam satuan kg/cm² yang dapat ditahan oleh beton. Contohnya, beton dengan mutu K-200 memiliki kuat tekan 200 kg/cm².
        Mutu beton K umumnya digunakan di Indonesia untuk proyek-proyek konstruksi yang tidak memerlukan perhitungan yang detail.</p>
      </div>
      <div className='w-screen'>
        <h1 className='font-bold mx-44 text-green-500 text-3xl capitalize'>mutu beton FC:</h1>
        <p className='capitalize text-justify mx-44 py-2'>Mutu beton FC diukur dalam satuan MPa (Mega Pascal). Nilai mutu beton FC menunjukkan kuat tekan beton dalam satuan 
        MPa yang dapat ditahan oleh beton. Contohnya, beton dengan mutu FC-20 memiliki kuat tekan 20 MPa. Mutu beton FC umumnya digunakan di Indonesia untuk proyek-proyek 
        konstruksi yang memerlukan perhitungan yang detail dan mengikuti standar interna- sional.</p>
      </div>
     </section>
      <Footer />
    </div>
  );
}

export default Page;
