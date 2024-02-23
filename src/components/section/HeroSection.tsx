import React from 'react';
import homeBanner from '../../../public/home banner.png'; // Used as background image
import CarouselHero from '../ui/Carousel';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative pb-12 h-screen" style={{ backgroundImage: `url('/home banner (1).png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-10 flex items-center justify-start pl-10">
          <div className="p-6 rounded-md font-thin max-w-xl">
            <p className="text-4xl text-[#2E2E2E] mt-4 backdrop-blur-md p-2 rounded-xl">
              Bangunan yang kokoh <br/> berasal dari bahan berkualitas
            </p>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
// "use client"
// import React from 'react';
// import backgroundImage from '../../public/IMG_8274.png'; // Used as background image
// import CarouselHero from '../ui/Carousel';
// import Link from 'next/link';


// const HeroSection = () => {
//   return (
//     // <section className="relative h-screen bg-cover bg-center bg-[#65B741]">
//     <section className="relative pb-12 bg-[#FAF5EF] bg-center">
//       <CarouselHero/>

//       {/* Overlay untuk efek gelas */}
//       {/* Ensure you remove unnecessary comments */}
//       {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

//       {/* Konten di tengah */}
//       {/* <div className="absolute inset-10 flex items-center justify-start pl-10"> */}
//         {/* Kotak dengan efek glass */}
//         {/* <div className="bg-white bg-opacity-30 p-6 rounded-md">
//           <h1 className="text-4xl font-bold text-white">Welcome to Our Website</h1>
//           <p className="text-lg text-white mt-4">Discover amazing things with us.</p>
//         </div> */}
//       {/* </div> */}
//     </section>
//   );
// };

// export default HeroSection;