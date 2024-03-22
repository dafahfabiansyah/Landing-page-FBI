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
          <div className="backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
            <div className="flex flex-col container">
              <h1 className="text-green-500 text-2xl p-4">Company Summary</h1>
              <p className=" text-xl">
                Concrete batching plant is a kind of equipment used to mix
                concrete in a concentrated way, which is widely used in large
                and medium construction engineering projects.
              </p>
            </div>
          </div>
          <Image src={HeroImage1} alt={""} className="h-[98vh]" />
        </div>
        <div className="relative">
          <div className="backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
            <div className="flex flex-col container">
              <h1 className="text-green-500 text-2xl p-4">
                Quality and Service
              </h1>
              <p className=" text-xl">
                The ethos embodied by our company is ‘quality and Service’. We
                remain at the forefront of the concrete in Indonesia, through
                our focus in delivering the best product with the best service.
              </p>
            </div>
          </div>
          <Image src={HeroImage2} alt={""} className="h-[98vh]" />
        </div>
        <div className="relative">
          <div className="backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
            <div className="flex flex-col container">
              <h1 className="text-green-500 text-2xl p-4">Our batching plant</h1>
              <p className=" text-xl">
                Not only in Jabodetabek, but our batching plant locations are
                available in several other locations.
              </p>
            </div>
          </div>
          <Image src={HeroImage3} alt={""} className="h-[98vh]" />
        </div>
        <div className="relative">
          <div className="backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
            <div className="flex flex-col container">
              <h1 className="text-green-500 text-2xl p-4">Portfolio project</h1>
              <p className=" text-xl">
              Has served many projects throughout Indonesia.
              </p>
            </div>
          </div>
          <Image src={HeroImage4} alt={""} className="h-[98vh]" />
        </div>
        
      </Carousel>
    </section>
  );
};

export default CarouselHero;
