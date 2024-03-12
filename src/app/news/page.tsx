"use client"
import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Card from '@/components/ui/cardArticles';
import { ArticleData } from '@/data/ArticlesData';
import Sidebar from '@/components/Sidebar'; // Import the Sidebar component

const Page = () => {
  return (
    <section>
      <Header />
      <head>
        <title>News - Fresh Beton Indonesia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.ico" />
        <meta name="description" content="Halaman berita Fresh Beton Indonesia" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Indonesian" />
        <meta name="author" content="Fresh Beton Indonesia" />
        <meta name="keywords" content="Fresh Beton Indonesia" />
      </head>
      <div className="flex">
        <div className='pt-20'>
        <Sidebar />
        </div>
        <div className='gap-4 flex flex-wrap justify-center py-10 pt-20 '>
          {ArticleData.map(article => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
