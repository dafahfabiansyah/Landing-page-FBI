import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Card from "./CardMobileBatch";
import { MobileBatchingPlantData } from "@/data/ProductCategoriesData";

const Page = () => {
  return (
    <section>
      <Header />
      <div className="gap-10 flex flex-wrap justify-center pt-20 pb-5  ">
      {MobileBatchingPlantData.map(mobilebatch => (
          <Card key={mobilebatch.id} mobilebatch={mobilebatch} />
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Page;
