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
      <div className="sm:block flex flex-wrap">
        <div className='pt-20 '> 
        <Sidebar />
        </div>
        <div className='gap-6 flex flex-wrap justify-center py-10 pt-20 '>
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
