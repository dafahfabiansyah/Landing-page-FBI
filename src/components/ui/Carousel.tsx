import React from "react";
import HeroImage1 from "../../../public/banner 1.jpg";
import HeroImage2 from "../../../public/BANNER 2.jpg";
import HeroImage3 from "../../../public/banner 3.jpg";
import HeroImage4 from "../../../public/banner 4.jpg";
import HeroImage5 from "../../../public/banner 5.jpg";
import HeroImage6 from "../../../public/banner 6.jpg";
import HeroImage7 from "../../../public/banner 7.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
          <div className="h-[calc(100vh - 4rem)] sm:h-[98vh] backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
            <div className="flex flex-col container">
              <h1 className="text-green-500 text-2xl p-4">Company Summary</h1>
              <p className=" text-xl">
                Concrete batching plant is a kind of equipment used to mix
                concrete in a concentrated way, which is widely used in large
                and medium construction engineering projects.
              </p>
            </div>
          </div>
          <Image
            src={HeroImage1}
            alt=""
            className="h-[calc(100vh - 4rem)] sm:h-[98vh]"
          />
        </div>
        <div className="relative">
          <div className="h-[calc(100vh - 4rem)] sm:h-[98vh] backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
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
          <Image
            src={HeroImage2}
            alt={""}
            className="h-[calc(100vh - 4rem)] sm:h-[98vh]"
          />
        </div>
        <div className="relative">
          <div className="h-[calc(100vh - 4rem)] sm:h-[98vh] backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
            <div className="flex flex-col container">
              <h1 className="text-green-500 text-2xl p-4">
                Our batching plant
              </h1>
              <p className=" text-xl">
                Not only in Jabodetabek, but our batching plant locations are
                available in several other locations.
              </p>
            </div>
          </div>
          <Image
            src={HeroImage3}
            alt={""}
            className="h-[calc(100vh - 4rem)] sm:h-[98vh]"
          />
        </div>
        <div className="relative">
          <div className="h-[calc(100vh - 4rem)] sm:h-[98vh] backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
            <div className="flex flex-col container">
              <h1 className="text-green-500 text-2xl p-4">Portfolio project</h1>
              <p className=" text-xl">
                Has served many projects throughout Indonesia.
              </p>
            </div>
          </div>
          <Image
            src={HeroImage4}
            alt={""}
            className="h-[calc(100vh - 4rem)] sm:h-[98vh]"
          />
        </div>
        <div className="relative">
          <div className="h-[calc(100vh - 4rem)] sm:h-[98vh] backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
            <div className="flex flex-col container">
              <h1 className="text-green-500 text-2xl p-4">Portfolio project</h1>
              <p className=" text-xl">
                Has served many projects throughout Indonesia.
              </p>
            </div>
          </div>
          <Image
            src={HeroImage5}
            alt={""}
            className="h-[calc(100vh - 4rem)] sm:h-[98vh]"
          />
        </div>
        <div className="relative">
          <div className="h-[calc(100vh - 4rem)] sm:h-[98vh] backdrop-left absolute top-0 left-0 w-64 h-full bg-white opacity-50 flex items-center justify-center">
            <div className="flex flex-col container">
              <h1 className="text-green-500 text-2xl p-4">Portfolio project</h1>
              <p className=" text-xl">
                Has served many projects throughout Indonesia.
              </p>
            </div>
          </div>
          <Image
            src={HeroImage6}
            alt={""}
            className="h-[calc(100vh - 4rem)] sm:h-[98vh]"
          />
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
          <Image
            src={HeroImage7}
            alt={""}
            className="h-[calc(100vh - 4rem)] sm:h-[98vh]"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselHero;
