import React from 'react'
import { ProductData } from '@/data/ProductData';

interface PageParams {
  id: string;
}

const Page = ({ params }: { params: PageParams }) => {
  const { id } = params;
  const productId = parseInt(id, 10);
  return (
    <div>page batching-plant</div>
  )
}

export default Page