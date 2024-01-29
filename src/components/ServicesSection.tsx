import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ServicesSection = () => {
  return (
  <section className='bg-[#99BC85]'>
    <h1 className='text-4xl font-bold text-orange-600 text-center py-3' >product and service</h1>
      <div className="flex justify-center items-center h-max">
      <div className="h-screen flex justify-center items-center">
        <ScrollArea className="h-full w-full md:w-[500px] m-12 rounded-md border p-4 overflow-y-auto">
        {/* <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4"> */}
          <div className="flex justify-center">
            <div className="overflow-x-auto"> {/* Tambahkan overflow-x-auto untuk mengizinkan scrolling horizontal */}
              <table className="table-auto w-full" > {/* Menjadikan tabel memiliki lebar penuh */}
                <thead>
                  <tr>
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Mutu K (kg/cm2)</th>
                    <th className="px-4 py-2">Mutu FC (Mpa)</th>
                    <th className="px-4 py-2">Slump</th> 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">30</td>
                    <td className="border px-4 py-2">New York</td>
                    <td className="border px-4 py-2">New York</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Jane Doe</td>
                    <td className="border px-4 py-2">25</td>
                    <td className="border px-4 py-2">Los Angeles</td>
                    <td className="border px-4 py-2">Los Angeles</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Bob Smith</td>
                    <td className="border px-4 py-2">35</td>
                    <td className="border px-4 py-2">Chicago</td>
                    <td className="border px-4 py-2"></td> {/* Tambahkan satu kolom kosong untuk membuat jumlah kolom tetap */}
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Alice Johnson</td>
                    <td className="border px-4 py-2">28</td>
                    <td className="border px-4 py-2">San Francisco</td>
                    <td className="border px-4 py-2"></td> {/* Tambahkan satu kolom kosong untuk membuat jumlah kolom tetap */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  </section>
  );
};

export default ServicesSection;
