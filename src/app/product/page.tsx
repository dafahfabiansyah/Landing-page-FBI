import Header from "@/components/Header";
import React from "react";
import Card from "@/components/ui/card";
import { ProductData } from "@/data/ProductData";
import Link from "next/link";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/section/ServicesSection";
import Image from "next/image";
import ServicesTable from "@/components/ServicesTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product - Fresh Beton Indonesia",
  description: "Halaman product Fresh Beton Indonesia",
  icons: {
    icon: "./icon.ico",
  },
};
const Page = () => {
  return (
    <div>
      <Header />
      <section className=" py-6">
        {/* header product page */}
        <div className="absolute inset-0 h-[500px] flex items-center justify-center">
          <Image src="/Readymix Concrete.jpg" alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="pt-[550px] grid grid-cols-1 sm:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Readymix Concrete.jpg"
              alt="Product 1"
              className="mt-8 rounded-l-3xl"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="text-center text-xl">
              {/* <h1 className="text-green-500 capitalize pb-2">
                special edition left
              </h1> */}
            </div>
          </div>
          <div className="flex justify-center items-center pb-3">
            <div className="text-center text-xl">
              {/* <h1 className="text-green-500 capitalize pb-2">
                special edition right
              </h1> */}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Concrete Pump.jpg"
              alt="Product 4"
              className=" rounded-r-3xl"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Precast.jpg"
              alt="Product 1"
              className="mt-8 rounded-l-3xl"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="text-center text-xl">
              {/* <h1 className="text-green-500 capitalize pb-2">
                special edition left
              </h1> */}
            </div>
          </div>
          <div className="flex justify-center items-center pb-3">
            <div className="text-center text-xl">
              {/* <h1 className="text-green-500 capitalize pb-2">
                special edition right
              </h1> */}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Batching Plant.jpg"
              alt="Product 4"
              className=" rounded-r-3xl"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              width={400}
              height={400}
              src="/Mobile Batching Plant.jpg"
              alt="Product 1"
              className="mt-8 rounded-l-3xl"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
