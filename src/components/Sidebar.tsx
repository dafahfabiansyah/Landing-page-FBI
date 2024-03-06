// Sidebar.js
import { MagnifyingGlass } from '@phosphor-icons/react';
import React from 'react';

const Sidebar = () => {
  return (
    // <aside className="sidebar bg-[#FAF5EF] h-full">
    <aside className="sidebar bg-gray-600 px-20 h-full">
      <div className="search-bar flex flex-row pt-20">
        <input type="text"  className='rounded-full border border-gray-600' placeholder="  Search..." />
        <button><MagnifyingGlass size={28} /></button>
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <button className='bg-green-500 p-1 w-full text-white'>lihat semua</button>
        <ul className=''>
          <li>batching plant</li>
          <li>concrete pump</li>
          <li>precast</li>
          <li>mobile batching</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
