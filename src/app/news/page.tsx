import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Card from '@/components/ui/cardArticles';
import { ArticleData } from '@/data/ArticlesData';
import Sidebar from '@/components/Sidebar'; // Import the Sidebar component
import { Metadata } from 'next';
import FloatingIcon from '@/components/FloatingIcon';

export const metadata: Metadata = {
  title: "Article - Fresh Beton Indonesia",
  description: "Halaman artikel Fresh Beton Indonesia",
  icons: {
    icon : "./icon.ico",
  }
};

const Page = () => {
  return (
    <section>
      <Header />
      <div className="flex flex-wrap">
        <div className='pt-20 '> 
        <Sidebar />
        </div>
        <div data-aos='fade-up' className='gap-4 flex flex-wrap justify-center pt-20  pb-5'>
          {ArticleData.map(article => (
            <Card key={article.id} article={article} />
          ))}
        </div>
      </div>
      <FloatingIcon/>
      <Footer />
    </section>
  );
};

export default Page;
