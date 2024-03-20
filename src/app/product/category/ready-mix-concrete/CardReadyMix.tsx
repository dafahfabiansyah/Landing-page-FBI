"use client";

import React from "react";
import { ReadyMixData } from '@/data/ProductCategoriesData'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CaretRight } from "@phosphor-icons/react";

const Card = ({ readymix}: { readymix: (typeof ReadyMixData)[number] }) => {
//   const router = useRouter();

//   const navigateToDetail = () => {
//     router.push(`/product/category/readymix/${readymix.id}`);
//   };

  return (
    <div className="bg-white rounded-md shadow-md w-96">
      <div className="cursor-pointer h-40 relative">
        <Image
          src={readymix.image}
          alt='readymix concrete'
          layout="fill"
          objectFit="cover"
          className="w-full transition duration-500 hover:scale-110 hover:z-30 rounded-t-md"
        //   onClick={navigateToDetail}
        />
        <p className="absolute bottom-2 right-2 backdrop-blur-sm text-white px-2 rounded-sm">
          {readymix.id}
        </p>
      </div>
    </div>
  );
};

export default Card;
