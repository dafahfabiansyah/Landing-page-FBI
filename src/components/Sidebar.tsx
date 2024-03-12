import React, { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { ArticleData } from '@/data/ArticlesData';

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  const performSearch = () => {
    const results = ArticleData.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <aside className="sidebar px-6 h-full">
      <div className="search-bar flex flex-row pt-20">
        <input
          type="text"
          className="border border-gray-600"
          placeholder="  Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="pl-2" onClick={performSearch}>
          <MagnifyingGlass size={28} />
        </button>
      </div>
      <div className="categories">
        <ul className="capitalize flex flex-col gap-y-2 pt-2">
          <li className="hover:bg-green-500 hover:text-white transition-all text-start p-1">
            Lihat Semua
          </li>
          {searchResults.map((result) => (
            <li
              key={result.id}
              className=" hover:bg-green-500 hover:text-white transition-all p-1"
            >
              {result.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
