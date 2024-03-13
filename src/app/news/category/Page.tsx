import React from 'react'
import { ArticleData } from '@/data/ArticlesData';
import Card from '@/components/ui/cardArticles';

const Page = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {ArticleData.map(article => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Page