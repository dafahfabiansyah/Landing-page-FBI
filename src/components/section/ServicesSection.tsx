"use client";

import React from "react";
import { ServicesData } from "@/data/ServicesData";
import ServicesTable from "../ServicesTable";

const ServicesSection = () => {
  return (
    // <section className='bg-[#FAF5EF] border-t border-b py-20 border-gray-200'>
    <section className="bg-white border-t border-b py-20 border-gray-200">
      <h1 className="text-4xl font-bold pb-2 text-green-600 text-center capitalize">
        quality and service
      </h1>
      <p className="text-center text-black text-lg pb-2 font-bold capitalize">
        table showing the quality of concrete produced by our company our
        company:
      </p>
      <ServicesTable />
    </section>
  );
};

export default ServicesSection;
