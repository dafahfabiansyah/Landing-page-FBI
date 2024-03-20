import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Card from "./CardPump";
import { ConcretePumpData } from "@/data/ProductCategoriesData";

const Page = () => {
  return (
    <section>
      <Header />
      <div className="gap-10 flex flex-wrap justify-center pt-20 pb-5  ">
        { ConcretePumpData.map((concrete) => (
          <Card key={concrete.id} concretepump={concrete} />
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Page;
