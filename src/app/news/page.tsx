"use client"

import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Card from '@/components/ui/cardArticles';
import { ArticleData } from '@/data/ArticlesData';

const Page = () => {
  return (
    <section>
    <Header/>
     <div className='gap-4 flex flex-wrap justify-center py-10 pt-20 '>
        {ArticleData.map(article => (
            <Card key={article.id} article={article} />
        ))}
    </div>
   <Footer/>
   </section>
  );
};

export default Page;
