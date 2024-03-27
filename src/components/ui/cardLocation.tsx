import React from "react";
import { LocationData } from "@/data/LocationData";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Card = ({ location }: { location: (typeof LocationData)[number] }) => {
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`/location/detail/${location.id}`);
  };

  const redirectToUrl = () => {
    // Open the URL in a new tab
    window.open(location.urlAddress, "_blank");
  };

  return (
    <div
      data-aos="fade-up"
      className="bg-white border-solid border-2 rounded-md overflow-hidden shadow-xl w-80 m-2"
    >
      <div
        onClick={redirectToUrl}
        className="cursor-pointer h-48 relative flex items-center justify-center place-items-center hover:z-50"
      >
        <Image
          src={location.imageThumbnail}
          alt={location.title}
          loading="lazy"
          layout="fill"
          objectFit="cover"
          className="transition duration-500 hover:scale-110"
        />
        <p className="absolute bottom-2 right-2 bg-green-500 text-white px-2 rounded-sm">
          {location.id}
        </p>
      </div>
      <div className="p-4 text-center flex flex-col justify-center items-center">
        <h1 className="capitalize  text-black text-xl mb-2">
          {location.title}
        </h1>
        {/* <p className='text-black mb-4'>{location.address}</p> */}
       <div>
       <button
          onClick={navigateToDetail}
          className="bg-[#252525] hover:bg-gray-800 transition-all text-white p-1 rounded-md focus:outline-none flex justify-end items-end"
        >
          detail
        </button>
       </div>
      </div>
    </div>
  );
};

export default Card;
