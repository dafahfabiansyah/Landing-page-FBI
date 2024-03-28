"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import Card from "../ui/cardLocation";
import { LocationData } from "@/data/LocationData";
import Skeleton from "../ui/Skeleton";

const LocationSection = () => {
  const limitedLocationData = LocationData.slice(0, 7);

  return (
    <section className="bg-[#FAF5EF] py-10 border-t border-b border-gray-200">
      <h1 className="text-center text-green-600 text-4xl font-bold capitalize">
        our location
      </h1>
      <p className="text-center text-black text-lg pb-2 font-bold capitalize">
      Batching plant locations have been available in Jabodetabek and other locations :
      </p>
      <div className="gap-6 flex flex-wrap justify-center">
        {limitedLocationData.map((location) => (
          <Suspense fallback={<Skeleton />}>
            <Card key={location.id} location={location} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
