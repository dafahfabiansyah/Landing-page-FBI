// // Import dependencies
// import React from 'react';
// import { ArticleData } from '@/data/ArticlesData';
// import Image from 'next/image';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// interface PageParams {
//     id: string; 
//   }
// const Page = ({ params }: { params: PageParams }) => {
//     const { id } = params;
  
//     // Parse the id into a number
//     const articlesId = parseInt(id, 10); // Using parseInt with radix 10
  
//     return (
//       <div>
//         <Header/>
//         {/* Displaying the 'id' value */}
//         <div className='pt-20 pb-5'>
//         <div>ID: {id}</div>
//         {/* Access product data using the parsed id */}
//         <div>nama: {ArticleData[articlesId - 1].title}</div>
//         {/* Use the parsed id to access the image */}
//         <div className='flex items-center justify-center justify-items-center'>
//         <Image width={500} height={400} src={ArticleData[articlesId - 1].image} alt={ArticleData[articlesId- 1].title} />
//         </div>
//         <div>deskripsi: {ArticleData[articlesId - 1].content}</div>
//         </div>
//         <Footer/>
//       </div>
//     );
//   }

//   export default Page

// Import dependencies
import React from 'react';
import { ArticleData } from '@/data/ArticlesData';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define PageParams interface
interface PageParams {
  id: string; 
}

// Define Page component
const Page = ({ params }: { params: PageParams }) => {
  const { id } = params;

  // Parse the id into a number
  const articlesId = parseInt(id, 10); // Using parseInt with radix 10

  return (
    <div>
      <Header />
      <div className='flex'>
        <div className='w-3/4 p-4'>
          {/* Main content */}
          <div className='pt-20 pb-5'>
            <div>ID: {id}</div>
            <div>nama: {ArticleData[articlesId - 1].title}</div>
            <div className='flex items-center justify-center justify-items-center'>
              <Image width={500} height={400} src={ArticleData[articlesId - 1].image} alt={ArticleData[articlesId - 1].title} />
            </div>
            <div>deskripsi: {ArticleData[articlesId - 1].content}</div>
          </div>
        </div>
        <div className='w-1/4 p-4'>
          {/* Sidebar */}
          <div className='bg-gray-200 p-4'>
            <h2>Sidebar</h2>
            {/* Add sidebar content here */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
