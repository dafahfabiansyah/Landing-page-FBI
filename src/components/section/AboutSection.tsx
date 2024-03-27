"use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import aboutImage from "../../../public/IMG_8931.png";

// const AboutSection = () => {
//   const [counters, setCounters] = useState([
//     { name: "Customer", current: 0, max: 900, increaseFactor: 25 },
//     { name: "Experience", current: 0, max: 22, increaseFactor: 2 },
//     { name: "Project", current: 0, max: 1600, increaseFactor: 25 },
//     { name: "Plant", current: 0, max: 7, increaseFactor: 1 },
//     { name: "Unit", current: 0, max: 100, increaseFactor: 25 },
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const updatedCounters = counters.map((counter) => ({
//         ...counter,
//         current:
//           counter.current < counter.max
//             ? counter.current + counter.increaseFactor
//             : counter.current,
//       }));
//       setCounters(updatedCounters);
//     }, 150);

//     return () => clearInterval(interval);
//   }, [counters]);

//   return (
//     // <section className='bg-[#FAF5EF] pt-10 items-center justify-center pb-10 container'>
//     <section className="bg-white py-10 items-center justify-center ">
//       <h1 className="font-bold text-center text-green-600 text-4xl py-3">
//         About Us
//       </h1>
//       <div className="flex flex-col gap-10 pr-5 py-4 md:flex-row container">
//         <Image src={aboutImage} width={300} height={150} alt="about us image" />
//         <p className="text-justify">
//           <span className="font-bold">PT. Fresh Beton Indonesia</span> is a
//           company engaged in the field of ready-mixed concrete and precast
//           concrete.
//           <br />
//           Frfresh Beton Readymix was established in March 2018 with the
//           establishment of a permanent batching plant in neglasari, Sukabumi. In
//           the same area with the Quary and Crusher{" "}
//           <span className="hover:underline hover:text-green-800">
//             <Link href="https://gbp-quarry.com/">PT.GBP</Link>
//           </span>
//           . The capacity of the installed batching plant is 60 m3/hour with a
//           fleet of 15 units of Truck Mixer with 7 m3 capacity and 5 units of
//           Truck minimix. We stand and always innovate in the process, equipment,
//           material usage to meet all the required quality needs. Our
//           professionals will always provide the best solutions and advice. with
//           consideration of quality and efficiency for the scope of work
//         </p>
//       </div>
//       <div className="border-4 justify-center items-center bg-image flex">
//         <div className="py-5">
//           <ul className="flex scroll-content flex-col md:flex-row gap-2">
//             {counters.map((counter, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center h-40 w-56"
//               >
//                 <p className="transition-all text-4xl font-bold text-white">
//                   {counter.current}+ {index === 1 ? "" : index === 0 ? "" : ""}
//                 </p>
//                 <li className="text-xl text-white">{counter.name}</li>
//               </div>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import aboutImage from "../../../public/IMG_8931.png";

const AboutSection = () => {
  const [counters, setCounters] = useState([
    { name: "Customer", current: 0, max: 900, increaseFactor: 25 },
    { name: "Experience", current: 0, max: 22, increaseFactor: 2 },
    { name: "Project", current: 0, max: 1600, increaseFactor: 25 },
    { name: "Plant", current: 0, max: 7, increaseFactor: 1 },
    { name: "Unit", current: 0, max: 100, increaseFactor: 25 },
  ]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCounting();
            if (observer.current) {
              observer.current.disconnect();
            }
          }
        },
        { threshold: 0.5 }
      );

      observer.current.observe(sectionRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const startCounting = () => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => ({
          ...counter,
          current:
            counter.current < counter.max
              ? counter.current + counter.increaseFactor
              : counter.current,
        }))
      );
    }, 150);

    return () => clearInterval(interval);
  };

  return (
    <section ref={sectionRef} className="bg-white py-10 items-center justify-center ">
      <h1 className="font-bold text-center text-green-600 text-4xl py-3">
        About Us
      </h1>
      <div className="flex flex-col gap-10 pr-5 py-4 md:flex-row container">
        <Image src={aboutImage} width={300} height={150} alt="about us image" />
        <p className="text-justify">
          <span className="font-bold">PT. Fresh Beton Indonesia</span> is a
          company engaged in the field of ready-mixed concrete and precast
          concrete.
          <br />
          Frfresh Beton Readymix was established in March 2018 with the
          establishment of a permanent batching plant in neglasari, Sukabumi. In
          the same area with the Quary and Crusher{" "}
          <span className="hover:underline italic hover:text-green-800">
            <Link href="https://gbp-quarry.com/">PT.GBP</Link>
          </span>
          . The capacity of the installed batching plant is 60 m3/hour with a
          fleet of 15 units of Truck Mixer with 7 m3 capacity and 5 units of
          Truck minimix. We stand and always innovate in the process, equipment,
          material usage to meet all the required quality needs. Our
          professionals will always provide the best solutions and advice. with
          consideration of quality and efficiency for the scope of work
        </p>
      </div>
      <div className="border-4 justify-center items-center bg-image flex">
        <div className="py-5">
          <ul className="flex scroll-content flex-col md:flex-row gap-2">
            {counters.map((counter, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center h-40 w-56"
              >
                <p className="transition-all text-4xl font-bold text-white">
                  {counter.current}+ {index === 1 ? "" : index === 0 ? "" : ""}
                </p>
                <li className="text-xl text-white">{counter.name}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
