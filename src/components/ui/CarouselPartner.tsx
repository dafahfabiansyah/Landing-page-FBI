import PartnerImage1 from "../../../public/Logo_BUMN_Untuk_Indonesia_2020.svg";
import PartnerImage2 from "../../../public/Google__G__logo.svg";
import PartnerImage3 from "../../../public/tokopedia-svgrepo-com.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const CarouselPartner = () => {
  return (
    <Carousel
      transitionTime={0.5}
      width={250}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true} // Set to true for infinite loop
      showStatus={false}
      stopOnHover={true}
      swipeable={true}
      className="justify-center items-center block h-full"
    >
      <div>
        <Image
          src={PartnerImage1}
          className="flex justify-center items-center"
          alt={""}
        />
        {/* <p className="legend hidden">Berdiri sejak Maret 2018 dengan Batching Plant permanen di Neglasari, Sukabumi, bersama dengan Quary dan Crusher PT.GBP. Batching plant memiliki kapasitas 60 m3/jam dengan Armada Truck Mixer 15 unit (kapasitas 7 m3) dan 5 unit Truck minimix. Kami terus berinovasi dalam proses, peralatan, dan material untuk memenuhi standar mutu yang dibutuhkan</p> */}
      </div>
      <div>
        <Image src={PartnerImage2} alt={""} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <Image src={PartnerImage3} alt={""} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
    // <div>
    //     <div className="w-full px-4">
    //       <div className="flex flex-wrap items-center justify-center">
    //         <a href="https://www.google.com/?hl=ID" target="_blank" className="max-w-[120px] mx-4 py-9 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
    //           <Image src="dist/img/clients/Google.svg" alt="Google"/>
    //         </a>
    //         <a href="https://www.gojek.com" target="_blank" className="max-w-[120px] mx-4 py-9 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
    //           <Image src="dist/img/clients/Gojek.svg" alt="Google"/>
    //         </a>
    //         <a href="https://www.tokopedia.com" target="_blank" className="max-w-[120px] mx-4 py-9 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
    //           <Image src="dist/img/clients/Tokopedia.svg" alt="Google"/>
    //         </a>
    //         <a href="https://id.duolingo.com" target="_blank" className="max-w-[120px] mx-4 py-9 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
    //           <Image src="dist/img/clients/Duolingo.svg" alt="Google"/>
    //         </a>
    //       </div>
    //     </div>
    // </div>
  );
};

export default CarouselPartner;
