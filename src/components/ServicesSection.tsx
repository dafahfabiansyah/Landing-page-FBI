import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ServicesSection = () => {
  return (
  <section>
    <h1 className='text-4xl font-bold text-orange-600 text-center py-3 capitalize'>product and service</h1>
    <div className="flex flex-col h-80">
    <div className="flex-grow overflow-auto">
      <table className="relative w-full border">
        <thead>
          <tr>
            <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300">Header</th>
            <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300">Header</th>
            <th className="sticky top-0 px-6 py-3 text-blue-900 bg-blue-300">Header</th>
          </tr>
        </thead>
        <tbody className="divide-y bg-blue-100">
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
            <td className="px-6 py-4 text-center">Column</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </section>
  );
};

export default ServicesSection;
