import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Testimoni - Fresh Beton Indonesia",
  description: "Halaman testimoni Fresh Beton Indonesia",
  icons: {
    icon: "./icon.ico",
  },
};

const page = () => {
  return (
    <section>
      <Header />
      <div className="min-w-screen bg-[#FAF5EF] min-h-screen flex items-center justify-center py-5">
        {/* <div className="w-full bg-[#FAF5EF] border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800"> */}
        <div className="w-full bg-[#FAF5EF] px-5 py-16 md:py-24 text-gray-800">
          <h1 className="text-center text-green-600 pb-4 text-4xl font-bold capitalize">
            testimoni
          </h1>
          <div className="w-full max-w-6xl mx-auto">
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        bapak asep <br />
                        (Project Owner)
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
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=3" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Bapak Kamsir <br />
                        (Project Manager)
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
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=5" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Bapak Dani Purwanto <br />
                        (Project Manager).
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
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=4" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Bapak Hairuddin <br />
                        (Project Owner).
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Timnya tangguh dan mesinnya semua lengkap, respon dari tim
                      Fresh Beton sangat ramah tamah dan mereka bersedia
                      menanyakan permasalahan apa yang sedang dihadapi.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=5" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        H. Enjang Ruslan Purnama <br />
                        (Kepala Desa)
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Terima kasih Fresh Beton yang sudah membantu suksesnya
                      pembangunan jalan desa Kampung Pasir Panjang. Fresh Beton
                      luar biasa, semoga makin jaya.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=6" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm uppercase text-gray-600">
                        Bapak <br />
                        (Project Manager)
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Dari segi pelayanannya baik, jadi kami akan lanjut
                      menggunakan Fresh Beton kedepannya.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
