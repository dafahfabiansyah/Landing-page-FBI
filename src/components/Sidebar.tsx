"use client"

import React, { useState } from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { ArticleData } from '@/data/ArticlesData';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  content: string;
}

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Article[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const performSearch = () => {
    const results = ArticleData.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  return (
    <aside className="sidebar px-6 h-full">
      <div className="search-bar flex flex-row pt-20">
        <input
          type="text"
          className="border rounded-lg border-gray-600"
          placeholder="  Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress} // Menambahkan event handler untuk key press
        />
        <button className="pl-2" onClick={performSearch}>
          <MagnifyingGlass size={28} />
        </button>
      </div>
      <div className="categories">
        <ul className="capitalize flex flex-col gap-y-2 pt-2">
          {/* <li className="hover:bg-green-500 hover:text-white transition-all text-start p-1">
            Lihat Semua
          </li> */}
          {searchResults.map((result) => (
            <li
              key={result.id}
              className="hover:bg-green-500 hover:text-white transition-all p-1"
            >
              <Link href={`/news/detail/${result.id}`}>
              {result.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
