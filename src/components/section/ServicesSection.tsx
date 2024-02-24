"use client"

import React from 'react';
import { ServicesData } from '@/data/ServicesData';
import { ScrollArea } from '@/components/ui/scroll-area';

const ServicesSection = () => {
  return (
    <section className='bg-[#FAF5EF] border-t border-b pt-3 border-gray-200'>
      <h1 className='text-4xl font-bold pb-2 text-orange-600 text-center capitalize'>mutu dan pelayanan</h1>
      <p className='text-center text-black text-xl pb-2 font-bold capitalize'>berikut ini adalah kualitas dan mutu dari produk kami</p>
      <div className="flex flex-col h-80">
        <div className="flex-grow overflow-auto">
          <table className="relative w-full border">
            <thead>
              <tr>
                <th className="sticky top-0 px-6 py-3 text-white bg-[#2E2E2E]">Mutu Beton K (kg/cm2)</th>
                <th className="sticky top-0 px-6 py-3 text-white bg-[#2E2E2E]">Mutu Beton FC (Mpa)</th>
                <th className="sticky top-0 px-6 py-3 text-white bg-[#2E2E2E]">Perkiraan Kuat Tekan</th>
              </tr>
            </thead>
            <tbody>
              {ServicesData.map((service, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-[#1EB442]' : 'bg-[#FFFFFF]'}>
                  <td className="px-2 py-4 text-center">{service.Mutu_K}</td>
                  <td className="px-2 py-4 text-center">{service.Mutu_FC}</td>
                  <td className="px-2 py-4 text-center">{service.slump}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
