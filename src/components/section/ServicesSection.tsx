"use client"

import React from 'react';
import { ServicesData } from '@/data/ServicesData';
import { ScrollArea } from '@/components/ui/scroll-area';

const ServicesSection = () => {
  return (
    <section className=''>
      <h1 className='text-4xl font-bold text-orange-600 text-center py-3 capitalize'>mutu dan pelayanan</h1>
      <div className="flex flex-col h-80">
        <div className="flex-grow overflow-auto">
          <table className="relative w-full border">
            <thead>
              <tr>
                <th className="sticky top-0 px-6 py-3 text-white bg-[#2E2E2E]">Mutu K (kg/cm2)</th>
                <th className="sticky top-0 px-6 py-3 text-white bg-[#2E2E2E]">Mutu FC (Mpa)</th>
                <th className="sticky top-0 px-6 py-3 text-white bg-[#2E2E2E]">Slump</th>
              </tr>
            </thead>
            <tbody>
              {ServicesData.map((service, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-[#1EB442]' : 'bg-[#FFFFFF]'}>
                  <td className="px-6 py-4 text-center">{service.Mutu_K}</td>
                  <td className="px-6 py-4 text-center">{service.Mutu_FC}</td>
                  <td className="px-6 py-4 text-center">{service.slump}</td>
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
