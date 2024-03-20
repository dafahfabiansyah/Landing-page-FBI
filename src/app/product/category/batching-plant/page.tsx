import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Card from "./CardBatching";
import { BatchingPlantData } from "@/data/ProductCategoriesData";

const Page = () => {
  return (
    <section>
      <Header />
      <div className="gap-10 flex flex-wrap justify-center pt-20 pb-5  ">
        {  BatchingPlantData.map((batching) => (
          <Card key={batching.id} batching={batching} />
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Page;
