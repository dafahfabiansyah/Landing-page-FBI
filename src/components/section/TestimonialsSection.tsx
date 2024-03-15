"use client"

// import React from 'react'
// import logo from "../../public/IMG_8274.png"
// import { useRouter } from 'next/navigation';

// const TestimonialsSection = () => {
//     const router = useRouter();

//     const navigateToDetail = () => {
//         router.push(`testimony`);
//     };
//   return (
//    <section>
// <div className="min-w-screen bg-[#FAF5EF] min-h-screen flex items-center justify-center py-5">
//     {/* <div className="w-full bg-[#FAF5EF] border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800"> */}
//     <div className="w-full bg-[#FAF5EF] px-5 py-16 md:py-24 text-gray-800">
//     <h1 className='text-center text-green-600 pb-4 text-4xl font-bold capitalize'>testimoni</h1>
//        <div className="w-full max-w-6xl mx-auto">
//             <div className="-mx-3 md:flex items-start">
//                 <div className="px-3 md:w-1/3">
//                     <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
//                         <div className="w-full flex mb-4 items-center">
//                             <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
//                                 <img src="https://i.pravatar.cc/100?img=1" alt=""/>
//                             </div>
//                             <div className="flex-grow pl-3">
//                                 <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
//                             </div>
//                         </div>
//                         <div className="w-full">
//                             <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
//                         </div>
//                     </div>
                
//                 </div>
//                 <div className="px-3 md:w-1/3">
//                     <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
//                         <div className="w-full flex mb-4 items-center">
//                             <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
//                                 <img src="https://i.pravatar.cc/100?img=3" alt=""/>
//                             </div>
//                             <div className="flex-grow pl-3">
//                                 <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
//                             </div>
//                         </div>
//                         <div className="w-full">
//                             <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi. Vitae, obcaecati ullam excepturi dicta error deleniti sequi. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div className="px-3 md:w-1/3">
//                     <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
//                         <div className="w-full flex mb-4 items-center">
//                             <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
//                                 <img src="https://i.pravatar.cc/100?img=5" alt=""/>
//                             </div>
//                             <div className="flex-grow pl-3">
//                                 <h6 className="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
//                             </div>
//                         </div>
//                         <div className="w-full">
//                             <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//    </section>
//   )
// }

// export default TestimonialsSection ;

import React from 'react';
import { useRouter } from 'next/navigation';

const TestimonialsSection = () => {
    const router = useRouter();

    const navigateToDetail = () => {
        router.push(`testimony`);
    };

    return (
        <section>
            <div className="min-w-screen bg-[#FAF5EF] flex items-center justify-center">
                <div className="w-full bg-[#FAF5EF] px-5 py-16 md:py-24 text-gray-800">
                    <h1 className='text-center text-green-600 pb-4 text-4xl font-bold capitalize'>testimoni</h1>
                    <p className="text-center text-black text-lg pb-2 font-bold capitalize">Apa yang dikatakan klien kami</p>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="-mx-3 md:flex items-start">
                            {/* Testimonial cards */}
                            <div className="px-3 md:w-1/3">
                                {/* Testimonial card content */}
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=2" alt=""/>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">bapak asep <br />(Project Owner).</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Pengecoran dilakukan sesuai dengan jadwal, volume beton yang digunakan sesuai dan pelayanan dari pihak fresh beon juga bagus.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Testimonial card content */}
                            <div className="px-3 md:w-1/3">
                                {/* Testimonial card content */}
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Bapak Kamsir <br />(Project Manager).</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Dari segi pelayanan cukup bagus dan dari mutu pun bagus sesuai dengan mutu yang diinginkan. Kami juga sudah beberapa kali order di sini dan sangat baik. Untuk selanjutnya kami berharap bisa order di Fresh Beton lagi.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Testimonial card content */}
                            <div className="px-3 md:w-1/3">
                                {/* Testimonial card content */}
                                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                    <div className="w-full flex mb-4 items-center">
                                        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                            <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                                        </div>
                                        <div className="flex-grow pl-3">
                                            <h6 className="font-bold text-sm uppercase text-gray-600">Bapak Dani Purwanto <br />(Project Manager).</h6>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Kami menggunakan Fresh Beton karena sebelumnya sudah pernah menggunakan juga. Dari segi service Fresh Beton memang oke<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Testimonial card content */}
                        </div>
                    </div>
                    {/* Button Component */}
                    <div className='flex justify-center items-center'>
                    <button onClick={navigateToDetail} className='bg-green-500 hover:bg-green-600 transition-all text-white py-2 px-4 rounded-md focus:outline-none'>baca semua</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;
