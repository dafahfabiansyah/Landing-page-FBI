"use client";

import React from "react";
import { PortfolioData } from "@/data/PortfolioData";
import { PrecastData } from '@/data/ProductCategoriesData'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CaretRight } from "@phosphor-icons/react";

const Card = ({ precast}: { precast: (typeof PrecastData)[number] }) => {
  return (
    <div className="bg-white rounded-md shadow-md w-96">
      <div className="cursor-pointer h-40 relative">
        <Image
          src={precast.image}
          alt={precast.name}
          layout="fill"
          objectFit="cover"
          className="w-full transition duration-500 hover:scale-110 hover:z-30 rounded-t-md"
        //   onClick={navigateToDetail}
        />
        <p className="absolute bottom-2 right-2 backdrop-blur-sm text-white px-2 rounded-sm">
          {precast.id}
        </p>
      </div>
    </div>
  );
};

export default Card;
