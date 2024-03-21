// "use client"

import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImage from '../../../public/IMG_5671.png';
import isoImage from '../../../public/ISO 14001, PT FBI_compressed (1)-1.png';
import isoImage9001 from '../../../public/ISO 9001, PT FBI-1.png';
import achievementImage from '../../../public/AWARDS AND ACHIEVEMENTS .png';
import FloatingIcon from '@/components/FloatingIcon';

export const metadata: Metadata = {
  title: "About us - Fresh Beton Indonesia",
  description: `Fresh Concrete Indonesia: Specializing in ready-mixed and precast concrete since 2018. We are a company that focuses on the production of ready-mixed concrete and precast concrete. With the establishment of Fresh Beton Readymix since March 2018, we have established our Permanent Batching Plant in Neglasari, Sukabumi. We are a large-scale manufacturer specializing in producing various mining machines including different types of 
  sand and gravel equipment, milling equipment, mineral processing equipment and building materials equipment.`,
  icons: {
    icon : "./icon.ico",
  }
};

const Page = () => {
  return (
    <div>
      <Header />
      <FloatingIcon/>
     <section className='overflow-x-hidden pt-20 pb-2 flex flex-col items-center justify-items-center justify-center'>
      <div className='text-center'>
        <div className="absolute inset-0 z-0 h-[500px] flex items-center justify-center">
          <Image src={aboutImage} alt="" layout="fill" objectFit="cover" blurDataURL='data....' placeholder='blur'/>
        </div>
        <p className='font-bold text-green-500 text-3xl capitalize py-3 pt-[450px]'>company profile</p>
        <article className='mx-44 text-justify'><span className='font-bold pt-4'>PT. Fresh Beton Indonesia</span> is a company engaged in the field of ready-mixed concrete 
          (readymix) and precast concrete. Fresh Beton Readymix was established in March 2018 with the establishment of 
          We are a family owned business and have been involved in supplying ready-mix concrete batching plants and equipment to the industry over the last 25 years. The installed batching plant capacity is 60 m3/hour 
          with a fleet of 15 7m3 capacity mixer trucks and 5 minimix trucks.</article>
      </div>
      <div className='flex flex-row gap-8 mx-44 pt-6 text-justify'>
          <div data-aos='fade-right' className='w-1/2'>
            <h1 className='text-xl font-bold capitalize'>vision</h1>
            <p>To be a Readymix Concrete and Precast Concrete company with innovative equipment support, 
              quality, and reliable for the community and the construction world.</p>
          </div>
          <div  data-aos='fade-left' className='w-1/2'>
            <h1 className='text-xl font-bold capitalize text-end'>mision</h1>
            <p>Meeting customer needs by providing innovative products and solutions and fast and reliable services. In line with its Vision and Mission, has a policy towards quality.
              We sell fresh concrete according to your project needs.</p>
          </div>
      </div>
      <div data-aos='fade-up' className='mx-44 pt-10'>
        <h1 className='capitalize text-center text-2xl mb-4 text-green-500'>Overview of PT Fresh Beton Indonesia</h1>
        <article className='text-justify'><span className='font-bold'>PT. Fresh Beton Indonesia</span> which was established in 2017 
        is a complete Readymix concrete manufacturer with technologically advanced production equipment and computerized systems for quality assurance of products and production processes. Supported by the supply of natural materials Split Andesite, Abubatu Cuci and Silica Sand Cuci large capacity of our internal group Quary Crusher. Ready mix concrete can be used for a wide range of industrial, commercial and infrastructure construction which includes the construction of buildings, factories, housing, highways, toll roads, waterworks, airstrips and so on. <br /> <span className='font-bold'>PT. Fresh Beton Indonesia</span>, We are a family owned business and have been involved in supplying ready-mix concrete batching plants and equipment to the industry over the last 25 years.</article>
      </div>
      <div>
      <div className="mx-44 pt-10">
            <h1 data-aos='fade-up' className='capitalize text-center text-2xl mb-4 text-green-500'>Cultural Values and Business Integration</h1>
            <p data-aos='fade-up' className="mb-4 text-center">Our commitment to our mission has always been based on the values that are the philosophy of our people..</p>
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
  <h1 className='capitalize text-center text-2xl mb-4 text-green-500'>certificate iso</h1>
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
