"use client";

import React, { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ArticleData } from "@/data/ArticlesData";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  content: string;
}

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
    if (event.key === "Enter") {
      performSearch();
    }
  };

  return (
    <aside className="pt-20 sidebar mx-3 px-6 h-full">
      <div className="flex flex-row justify-between gap-48">
        <div className="search-bar flex flex-row">
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
        <ul className="capitalize flex flex-row gap-4 py-2">
          {[
            "Ready Mix Concrete",
            "Concrete Pump",
            "Precast",
            "Batching Plant",
            "Mobile Batching Plant",
          ].map((category, index) => (
            <li
              key={index}
              className="bg-gray-100  hover:bg-gray-200 rounded-full px-1 hover:text-gray-700 transition-all p-1 relative"
            >
              <Link href={`/news/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* <h3 className="font-bold text-lg">Categories</h3> */}
        {/* <ul className="capitalize flex flex-row gap-y-2 pt-2">
          {ArticleData.map((article) => (
            <li
              key={article.id}
              className="bg-gray-100 hover:bg-gray-200 rounded-full px-1 hover:text-gray-700 transition-all p-1 relative"
            >
              <Link href={`/news/category/${article.category}`}>
                {article.category}
              </Link>
            </li>
          ))}
        </ul> */}
        {/* <ul className="capitalize flex flex-row gap-4 pt-2">
          {[
            "Ready Mix Concrete",
            "Concrete Pump",
            "Precast",
            "Batching Plant",
            "Mobile Batching Plant",
          ].map((category, index) => (
            <li
              key={index}
              className="bg-gray-100 hover:bg-gray-200 rounded-full px-1 hover:text-gray-700 transition-all p-1 relative"
            >
              <Link href={`/news/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="categories">
        <ul className="capitalize flex flex-col gap-y-2 pt-2">
          {searchResults.map((result) => (
            <li
              key={result.id}
              className="hover:bg-green-500 hover:text-white transition-all p-1 relative"
            >
              <Link href={`/news/detail/${result.id}`}>{result.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
