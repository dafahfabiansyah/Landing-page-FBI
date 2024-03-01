"use client"

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImage from '../../../public/IMG_5671.png';
import isoImage from '../../../public/ISO 14001, PT FBI_compressed (1)-1.png';
import isoImage9001 from '../../../public/ISO 9001, PT FBI-1.png';
import achievementImage from '../../../public/AWARDS AND ACHIEVEMENTS .png';
import FloatingIcon from '@/components/FloatingIcon';

const Page = () => {
  return (
    <div>
      <Header />
      <FloatingIcon/>
     <section className='overflow-x-hidden pt-20 pb-2 flex flex-col items-center justify-items-center justify-center'>
      <div className='text-center mx-44'>
        <p className='font-bold text-green-500 text-3xl capitalize pb-6'>company profile</p>
        {/* <div className="relative h-[400px] w-screen" style={{ backgroundImage: `url('/IMG_5671.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> */}
        <div className="relative h-[400px] w-screen" style={{ backgroundImage: `url('/IMG_5671.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <article className='mx-44 text-justify pt-10'><span className='font-bold pt-4'>PT. Fresh Beton Indonesia</span> adalah perusahaan yang bergerak di bidang beton siap pakai 
          (readymix) dan beton pracetak (precast). Fresh Beton Readymix berdiri mulai Maret 2018 dengan mendirikan 
          Permanen Batching Plant di neglasari, Sukabumi. Di dalam 1 area yang sama dengan Quary dan Crusher PT. GBP. Kapasitas batching plant terpasang 60 m3/jam 
          dengan jumlah Armada Truck Mixer 15 unit Kapasitas 7m3 dan 5 unit Truck minimix.</article>
      </div>
      <div className='flex flex-row gap-8 mx-44 pt-6 text-justify'>
          <div data-aos='fade-right' className='w-1/2'>
            <h1 className='text-xl font-bold capitalize'>visi</h1>
            <p>Menjadi perusahaan Beton Siap Pakai (Readymix Concrete) dan Beton Pracetak (Precast Concrete) dengan dukungan peralatan yang inovatif, 
              berkualitas, dan terpercaya bagi masyarakat dan dunia konstruksi.</p>
          </div>
          <div  data-aos='fade-left' className='w-1/2'>
            <h1 className='text-xl font-bold capitalize text-end'>misi</h1>
            <p>Memenuhi kebutuhan pelanggan dengan memberikan produk serta solusi yang inovatif dan layanan yang cepat dan handal. Sejalan dengan Visi dan Misinya, mempunyai kebijakan terhadap mutu.
              Kami menjual beton segar sesuai dengan kebutuhan proyek Anda.</p>
          </div>
      </div>
      <div data-aos='fade-up' className='mx-44 pt-10'>
        <h1 className='capitalize text-center text-2xl mb-4 text-green-500'>sekilas tentang PT. Fresh Beton Indonesia</h1>
        <article className='text-justify'><span className='font-bold'>PT. Fresh Beton Indonesia</span> yang didirikan tahun 2017 
        adalah produsen beton Readymix terlengkap dengan peralatan produksi yang bertehnologi maju dan system terkomputerisasi untuk jaminan mutu produk dan proses produksinya. Didukung oleh suplai material alam Split Andesit, Abubatu Cuci dan Pasir Silika Cuci kapasitas besar dari Quary Crusher Grup Internal kami. Beton ready mix dapat digunakan untuk berbagai macam kontruksi industrial, komersial dan juga infrastruktur yang mencakup pembangunangedung-gedung, pabrik, perumahan, jalan raya, jalan tol, bangunan air, Lapangan Terbang dan lain sebagainya. <br /> <span className='font-bold'>PT. Fresh Beton Indonesia</span>, juga memiliki peralatan produksi Batching type Fix Plant dan Mobile Plant untuk kebutuhan beton di remote area dan proyek yang sulit dijangkau dengan readymix konvensional.</article>
      </div>
      <div>
      <div className="mx-44 pt-10">
            <h1 data-aos='fade-up' className='capitalize text-center text-2xl mb-4 text-green-500'>Nilai Budaya dan Integrasi Bisnis</h1>
            <p data-aos='fade-up' className="mb-4 text-center">Komitmen kami terhadap misi senantiasa dilandasi oleh nilai – nilai yang menjadi filosofi insan.</p>
            <ul>
                <li data-aos="fade-right" className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-5'>S</span>emangat yang tinggi dalam belajar dan terus menggali ilmu untuk pengembangan dan mencapai visi misi perusahaan
                </li>
                <li data-aos="fade-right" className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-1'>M</span>emiliki integritas yang baik dan proporsional dalam melakukan segala sesuatu, agar tercipta suatu simbiosis yang saling menguntungkan
                </li>
                <li data-aos="fade-right" className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-3'>A</span>da keinginan untuk terus proaktif meningkatkan kinerja melalui penciptaan ide yang kreatif, inovatif, dan efisien yang berujung pada kesehatan karyawan
                </li>
                <li data-aos="fade-right" className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-3'>R</span>aihlah tekad menjadi bagian dari tim kerja yang solid dan dinamis
                </li>
                <li data-aos="fade-right" className="mb-2">
                    <span className='text-5xl text-emerald-600 pr-3'>T</span>empatkan kepuasan pelanggan sebagai prioritas utama dalam tahapan SOP baik dari segi mutu, pengiriman, dan pelayanan
                </li>
            </ul>
        </div>
      </div>
      {/* <div className='flex pb-10'> */}
      <div className='flex flex-col items-center pb-10'>
  <h1 className='capitalize text-center text-2xl mb-4 text-green-500'>sertifikat iso</h1>
  <div className='flex flex-row h-[410px] w-[300px] justify-center gap-40'>
    <Image src={isoImage} alt='' className='hover:scale-150 transition-all'/>
    <Image src={isoImage9001} alt='' className='hover:scale-150 transition-all'/>
  </div>
</div>
     </section>
      <Footer />
    </div>
  );
}

export default Page;
