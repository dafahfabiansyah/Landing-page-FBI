// import Image from 'next/image';
// import React from 'react';

// interface Article {
//   id: number;
//   title: string;
//   content: string;
// }

// interface Props {
//   articles: Article[];
// }

// const Card: React.FC<Props> = ({ articles }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {articles.map(article => (
//         <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
//           <Image className="w-full h-40 object-cover" src="https://via.placeholder.com/400x200" alt={article.title} />
//           <div className="p-4">
//             <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
//             <p className="text-gray-700">{article.content}</p>
//           </div>
//         </div>
//       ))}
//     </div>
    
//   );
// };

// export default Card;

import React from 'react';
import { ArticleData } from '@/data/ArticlesData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from '@phosphor-icons/react';
// import { CaretRight } from '@phosphor-icons/react';

const Card = ({ article }: {  article: typeof ArticleData[number] }) => {
    const router = useRouter();

    const navigateToDetail = () => {
        router.push(`/news/detail/${article.id}`);
    };

    return (
        <div className="bg-white border-solid border-2 rounded-md shadow-md w-96">
             <div className="cursor-pointer h-40 relative">
                <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full transition duration-500 hover:scale-110 hover:z-30 rounded-t-md"
                    onClick={navigateToDetail}
                />
                 {/* <p className='absolute bottom-2 right-2 backdrop-blur-sm text-white px-2 rounded-sm'>{portfolio.id}</p> */}
            </div>
            <div className="flex flex-col justify-between p-4 w-full">
                <div>
                    <div className='flex flex-row justify-between'>
                    <h1 className='truncate capitalize text-black text-xl font-semibold mb-2'>{article.title}</h1>
                    <ArrowUpRight size={28} />
                    </div>
                    <p className='text-wrap capitalize text-black mb-1'>{article.content}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
