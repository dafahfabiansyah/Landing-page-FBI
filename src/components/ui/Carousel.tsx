import HeroImage1 from "../../../public/MC Honglu.png";
import HeroImage2 from "../../../public/IMG_8931.png";
import HeroImage3 from "../../../public/2023-08-03-09-16-55-805.jpg";
import HeroImage4 from "../../../public/TM 12m3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const CarouselHero = () => {
  return (
    <section>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        stopOnHover={true}
        swipeable={true}
      >
        <div className="relative">
          <div className="backdrop-left absolute top-0 left-0 w-80 h-full backdrop-blur-sm flex items-center justify-center">
            <p className="text-white p-4">Teks Anda di sini</p>
          </div>
          <Image src={HeroImage1} alt={""} className="lg:h-[98vh] h-[48vh]" />
        </div>
        <div className="relative">
          <div className="backdrop-left absolute top-0 left-0 w-80 h-full backdrop-blur-sm flex items-center justify-center">
            <p className="text-white p-4">Teks Anda di sini</p>
          </div>
          <Image src={HeroImage2} alt={""} className="lg:h-[98vh] h-[48vh]" />
        </div>
        <div className="relative">
          <div className="backdrop-left absolute top-0 left-0 w-80 h-full backdrop-blur-sm flex items-center justify-center">
            <p className="text-white p-4">Teks Anda di sini</p>
          </div>
          <Image src={HeroImage3} alt={""} className="lg:h-[98vh] h-[48vh]" />
        </div>
        <div className="relative">
          <div className="backdrop-left absolute top-0 left-0 w-80 h-full backdrop-blur-sm flex items-center justify-center">
            <p className="text-white p-4">Teks Anda di sini</p>
          </div>
          <Image src={HeroImage4} alt={""} className="lg:h-[98vh] h-[48vh]" />
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselHero;
