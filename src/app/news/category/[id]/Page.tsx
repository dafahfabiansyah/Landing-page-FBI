import React from 'react';
import { ArticleData } from '@/data/ArticlesData';
import Card from '@/components/ui/cardArticles';

interface PageParams {
  id: string; 
}

const Page = ({ params }: { params: PageParams }) => {
  const { id } = params;

  // Parse the id into a number
  const categoryArticleId = parseInt(id, 10);

  // Filter articles based on category
  const filteredArticles = ArticleData.filter(article => article.category === id);

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {/* Display filtered articles */}
        {filteredArticles.map(article => (
          <Card key={article.id} article={article} />
        ))}
      </div>
      <article className='flex flex-col gap-5'>
        {/* Display category */}
        <span className='text-lg mx-20 text-justify'>{id}</span>
      </article>
    </div>
  );
}

export default Page;
