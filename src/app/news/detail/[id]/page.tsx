import React from 'react';
import { ArticleData } from '@/data/ArticlesData';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { UserCircle } from '@phosphor-icons/react';

export const metadata: Metadata = {
  title: `Article - ${ArticleData[0].title}`,
  description: `Halaman article ${ArticleData[0].title} Fresh Beton Indonesia`,
  icons: {
    icon : "./icon.ico",
  }
};


interface PageParams {
  id: string;
}
// Define Page component
const Page = ({ params }: { params: PageParams }) => {
  const { id } = params;

  // Parse the id into a number
  const articleId = parseInt(id, 10);
  return (
    <div>
      <Header />
      <div className='container mx-auto px-4 pt-20'>
        <div className='flex'>
            {/* Main content */}
            <div className='pt-10 pb-5'>
              <span className='text-3xl capitalize flex font-bold mb-2 justify-center items-center'>{ArticleData[articleId - 1].title}</span>
              <div className='flex flex-row mx-8 gap-4'>
                <Link href={`/news/category/${ArticleData[articleId - 1].category}`}>
              <p className='mb-4 pr-1 capitalize text-grey-600 bg-gray-100 hover:bg-gray-200 rounded-full px-1 hover:text-gray-700 transition-all'>{ArticleData[articleId - 1].category}</p>
                </Link>
              <p className='flex flex-col text-gray-500 decoration-indigo-500'>{ArticleData[articleId - 1].createDate}</p>
              </div>
                {/* <UserCircle size={34} /> */}
              <div className='flex items-center justify-center mb-4'>
                <Image width={800} height={700} src={ArticleData[articleId - 1].image} alt={ArticleData[articleId - 1].title} />                
              </div>
              <article className='flex flex-col gap-5'>
                  <p className='text-lg mx-20 text-justify'>{ArticleData[articleId - 1].content}</p>
                  <p className='text-lg mx-20 text-justify'>{ArticleData[articleId - 1].paragraph1}</p>
                  <p className='text-lg mx-20 text-justify'>{ArticleData[articleId - 1].paragraph2}</p>
              </article>
            </div>
          </div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
