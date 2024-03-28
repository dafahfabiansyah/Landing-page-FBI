// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import React from "react";
// import Card from "./CardPump";
// import { ConcretePumpData } from "@/data/ProductCategoriesData";
// import Image from "next/image";

// const Page = () => {
//   return (
//     <section className="overflow-x-hidden">
//       <Header />
//         <div className="absolute inset-0 z-0 h-[500px] flex items-center justify-center">
//           <Image src='/Concrete Pump.jpg' alt="" layout="fill" className="flex items-center justify-center"/>
//         </div>
//         <div className="gap-10 flex flex-wrap justify-center pt-[550px] pb-5 relative z-10">
//         { ConcretePumpData.map((concrete) => (
//           <Card key={concrete.id} concretepump={concrete} />
//         ))}
//        </div>
//       <Footer />
//     </section>
//   );
// };

// export default Page;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Card from "./CardPump";
import { ConcretePumpData } from "@/data/ProductCategoriesData";
import Image from "next/image";
import BoomTable from "@/components/BoomTable";

const Page = () => {
  return (
    <section className="overflow-x-hidden">
      <Header />
      <div className="absolute inset-0 z-0 h-[500px] flex items-center justify-center">
        <Image
          src="/Concrete Pump.jpg"
          alt=""
          layout="fill"
          className="flex items-center justify-center"
        />
      </div>
      <div className="gap-10 flex flex-wrap justify-center pt-[550px] pb-5 relative z-10">
        {ConcretePumpData.map((concrete) => (
          <Card key={concrete.id} concretepump={concrete} />
        ))}
      </div>
      {/* <div className="container mx-auto px-4">
        <BoomTable />
      </div> */}
      <Footer />
    </section>
  );
};

export default Page;
