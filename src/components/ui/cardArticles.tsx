"use client";
import React from "react";
import { ArticleData } from "@/data/ArticlesData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight, UserCircle } from "@phosphor-icons/react";

const Card = ({ article }: { article: (typeof ArticleData)[number] }) => {
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`/news/detail/${article.id}`);
  };

  // Fungsi untuk membatasi teks menjadi 100 karakter
  const truncateContent = (content: string) => {
    return content.length > 50 ? content.slice(0, 50) + "..." : content;
  };

  const truncateTitle = (title: string) => {
    return title.length > 20 ? title.slice(0, 20) + "..." : title;
  };

  return (
    <section className="bg-white w-96 h-[400px] relative">
   
      <Image
        src={article.image}
        alt={article.title}
        layout="responsive"
        width={1000} // Sesuaikan dengan lebar maksimum gambar yang diinginkan
        height={600} // Sesuaikan dengan tinggi maksimum gambar yang diinginkan
        quality={100}
        objectFit="cover"
        className="w-full h-96 transition duration-500 rounded-md cursor-pointer"
        onClick={navigateToDetail}
      />

      {/* <div className=" container absolute bottom-0 left-0 right-0 py-2 bg-transparent bg-opacity-50 text-white">
        <ul className="flex flex-row justify-between">
          <li>
            <span className=" capitalize text-xs font-semibold mb-2">
              {article.createDate}
            </span>
          </li>
          <li className="flex flex-row gap-2">
          
            <UserCircle size={34} className="rounded-full w-5 h-5" />
            <span className=" capitalize text-xs font-semibold pt-1">
              {article.authorName}
            </span>
          </li>
        </ul>
        <h1 className="w-80 capitalize text-lg font-semibold mb-2">
          {article.title}
        </h1>
        
      </div> */}
    </section>
  );
};

export default Card;
