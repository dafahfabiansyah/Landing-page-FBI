"use client";

import React from "react";
import { useRouter } from "next/navigation";

const TestimonialsSection = () => {
  const router = useRouter();

  const navigateToDetail = () => {
    router.push(`testimony`);
  };

  return (
    <section>
      <div className="min-w-screen bg-[#FAF5EF] flex items-center justify-center">
        <div className="w-full bg-[#FAF5EF] px-5 py-16 md:py-24 text-gray-800">
          <h1 className="text-center text-green-600 pb-4 text-4xl font-bold capitalize">
            testimonials
          </h1>
          <p className="text-center text-black text-lg pb-2 font-bold capitalize">
          What our clients have to say
          </p>
          <div className="w-full max-w-6xl mx-auto">
            <div className="-mx-3 md:flex items-start">
              {/* Testimonial cards */}
              <div className="px-3 md:w-1/3">
                {/* Testimonial card content */}
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="/sekolah sma bogor.jpeg" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm text-gray-600">
                        {/* Bpk. asep <br />
                        (Project Owner). */}
                        <ul className="w-auto">
                          <li>Bpk. Asep - Yayasan Sekolah SMA Bogor</li>
                          <li>(Project Owner)</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Pengecoran dilakukan sesuai dengan jadwal, volume beton
                      yang digunakan sesuai dan pelayanan dari pihak fresh beon
                      juga bagus.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Testimonial card content */}
              <div className="px-3 md:w-1/3">
                {/* Testimonial card content */}
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="/rumah makan.jpeg" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm text-gray-600">
                        {/* Bpk. Kamsir <br />
                        (Project Manager). */}
                        <ul className="w-auto">
                          <li>Bpk. Kamsir - Rumah Makan Padang Pagi Sore Bogor</li>
                          <li>(Project Owner)</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Dari segi pelayanan cukup bagus dan dari mutu pun bagus
                      sesuai dengan mutu yang diinginkan. Kami juga sudah
                      beberapa kali order di sini dan sangat baik. Untuk
                      selanjutnya kami berharap bisa order di Fresh Beton lagi.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Testimonial card content */}
              <div className="px-3 md:w-1/3">
                {/* Testimonial card content */}
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="/RS Hermina Depok.jpeg" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm text-gray-600">
                        {/* Bpk. Dani Purwanto <br />
                        (Project Manager). */}
                        <ul className="w-auto">
                          <li>Bpk. Dani Purwanto - Rumah Makan Padang Pagi Sore Bogor</li>
                          <li>(Project Owner)</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Kami menggunakan Fresh Beton karena sebelumnya sudah
                      pernah menggunakan juga. Dari segi service Fresh Beton
                      memang oke
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Testimonial card content */}
            </div>
          </div>
          {/* Button Component */}
          <div className="flex justify-center items-center">
            <button
              onClick={navigateToDetail}
              className="bg-green-500 hover:bg-green-600 transition-all text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
