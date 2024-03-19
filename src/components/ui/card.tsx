"use client";

import React from "react";
import { ProductData } from "@/data/ProductData";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ product }: { product: (typeof ProductData)[number] }) => {
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`/product/detail/${product.id}`);
  };

  return (
    <div
      data-aos="fade-up"
      className="bg-white border-solid border-2 rounded-md overflow-hidden shadow-md w-80 m-2"
    >
      <div className="h-40 relative">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h1 className="capitalize text-black text-xl font-semibold mb-2">
          {product.name}
        </h1>
        <p className="text-black mb-4 truncate">{product.description}</p>
        <button
          onClick={navigateToDetail}
          className="bg-green-500 hover:bg-green-600 transition-all text-white py-2 px-4 rounded-md focus:outline-none"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
