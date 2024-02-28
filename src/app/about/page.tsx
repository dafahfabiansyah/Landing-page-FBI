"use client"

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImage from '../../../public/IMG_5671.png';
import isoImage from '../../../public/ISO 14001, PT FBI_compressed (1)-1.png';
import isoImage9001 from '../../../public/ISO 9001, PT FBI-1.png';
import achievementImage from '../../../public/AWARDS AND ACHIEVEMENTS .png';

const Page = () => {
  return (
    <div>
      <Header />
     <section className='pt-20 pb-2 flex flex-col items-center justify-items-center justify-center'>
      <div className='text-center mx-44'>
        <p className='font-bold text-green-500 text-3xl capitalize'>company profile</p>
        <article className='text-justify pt-2'><span className='font-bold pt-4'>PT. Fresh Beton Indonesia</span> adalah perusahaan yang bergerak di bidang beton siap pakai 
          (readymix) dan beton pracetak (precast). Fresh Beton Readymix berdiri mulai Maret 2018 dengan mendirikan 
          Permanen Batching Plant di neglasari, Sukabumi. Di dalam 1 area yang sama dengan Quary dan Crusher PT. GBP. Kapasitas batching plant terpasang 60 m3/jam 
          dengan jumlah Armada Truck Mixer 15 unit Kapasitas 7m3 dan 5 unit Truck minimix.</article>
      </div>
      <div className='flex flex-row gap-8 mx-44 pt-6 text-justify'>
          <div className='w-1/2'>
            <h1 className='text-xl font-bold capitalize'>visi</h1>
            <p>Menjadi perusahaan Beton Siap Pakai (Readymix Concrete) dan Beton Pracetak (Precast Concrete) dengan dukungan peralatan yang inovatif, 
              berkualitas, dan terpercaya bagi masyarakat dan dunia konstruksi.</p>
          </div>
          <div className='w-1/2'>
            <h1 className='text-xl font-bold capitalize'>misi</h1>
            <p>Memenuhi kebutuhan pelanggan dengan memberikan produk serta solusi yang inovatif dan layanan yang cepat dan handal. Sejalan dengan Visi dan Misinya, mempunyai kebijakan terhadap mutu.
              Kami menjual beton segar sesuai dengan kebutuhan proyek Anda.</p>
          </div>
      </div>
      <div>
      <div className="mx-44 pt-16">
            <h1 className='capitalize text-center text-2xl mb-4 text-green-500'>Nilai Budaya dan Integrasi Bisnis</h1>
            <p className="mb-4 text-center">Komitmen kami terhadap misi senantiasa dilandasi oleh nilai – nilai yang menjadi filosofi insan.</p>
            <ul>
                <li className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-5'>S</span>emangat yang tinggi dalam belajar dan terus menggali ilmu untuk pengembangan dan mencapai visi misi perusahaan
                </li>
                <li className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-1'>M</span>emiliki integritas yang baik dan proporsional dalam melakukan segala sesuatu, agar tercipta suatu simbiosis yang saling menguntungkan
                </li>
                <li className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-3'>A</span>da keinginan untuk terus proaktif meningkatkan kinerja melalui penciptaan ide yang kreatif, inovatif, dan efisien yang berujung pada kesehatan karyawan
                </li>
                <li className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-3'>R</span>aihlah tekad menjadi bagian dari tim kerja yang solid dan dinamis
                </li>
                <li className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-3'>T</span>empatkan kepuasan pelanggan sebagai prioritas utama dalam tahapan SOP baik dari segi mutu, pengiriman, dan pelayanan
                </li>
            </ul>
        </div>
      </div>
     </section>
      <Footer />
    </div>
  );
}

export default Page;
