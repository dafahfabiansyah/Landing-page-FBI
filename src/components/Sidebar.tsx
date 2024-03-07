// Sidebar.js
import { MagnifyingGlass } from '@phosphor-icons/react';
import React from 'react';

const Sidebar = () => {
  return (
    // <aside className="sidebar bg-[#FAF5EF] h-full">
    <aside className="sidebar px-8 h-full">
      <div className="search-bar flex flex-row pt-20">
        <input type="text" className='rounded-full border border-gray-600 pr-2' placeholder="  Search..." />
        <button><MagnifyingGlass size={28} /></button>
      </div>
      <div className="categories">
        <h2 className='text-xl font-bold capitalize'>kategori</h2>
        {/* <button className='bg-green-500 p-1 w-full text-white'>lihat semua</button> */}
        <ul className='capitalize'>
          <li className='rounded-md hover:bg-green-500 transition-all p-1'>batching plant</li>
          <li className='rounded-md hover:bg-green-500 transition-all p-1'>concrete pump</li>
          <li className='rounded-md hover:bg-green-500 transition-all p-1'>precast</li>
          <li className='rounded-md hover:bg-green-500 transition-all p-1'>mobile batching</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
