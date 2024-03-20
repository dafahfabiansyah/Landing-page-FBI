"use client";

import React from "react";
import { ConcretePumpData } from '@/data/ProductCategoriesData'
import Image from "next/image";

const Card = ({ concretepump}: { concretepump: (typeof ConcretePumpData)[number] }) => {
  return (
    <div className="bg-white rounded-md shadow-md w-96">
      <div className="cursor-pointer h-40 relative">
        <Image
          src={concretepump.image}
          alt='concrete pump'
          layout="fill"
          objectFit="cover"
          className="w-full flex transition duration-500 hover:scale-110 hover:z-30 rounded-t-md"
        //   onClick={navigateToDetail}
        />
        <p className="absolute bottom-2 right-2 backdrop-blur-sm text-white px-2 rounded-sm">
          {concretepump.id}
        </p>
      </div>
    </div>
  );
};

export default Card;
