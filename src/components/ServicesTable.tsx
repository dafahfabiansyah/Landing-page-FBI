import React from "react";
import { ServicesData } from "@/data/ServicesData";

const ServicesTable = () => {
  return (
    <section>
      <div className="flex flex-col h-80 mx-10">
        <div className="flex-grow overflow-auto">
          <table className="relative w-full border">
            <thead>
              <tr>
                <th className="sticky top-0 px-6 py-3 text-white rounded-tl-md bg-[#2E2E2E]">
                  Mutu Beton K (Kg/Cm²)
                </th>
                <th className="sticky top-0 px-6 py-3 text-white bg-[#2E2E2E]">
                  Mutu Beton FC (Mpa)
                </th>
                <th className="sticky top-0 px-6 py-3 text-white bg-[#2E2E2E]">
                  Slump
                </th>
                <th className="sticky top-0 px-6 py-3 text-white rounded-tr-md bg-[#2E2E2E]">
                  Perkiraan Kuat Tekan
                </th>
              </tr>
            </thead>
            <tbody>
              {ServicesData.map((service, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#1EB442]" : "bg-[#FFFFFF]"}
                >
                  <td className="px-2 py-4 text-center">{service.Mutu_K}</td>
                  <td className="px-2 py-4 text-center">{service.Mutu_FC}</td>
                  <td className="px-2 py-4 text-center">{service.slump}</td>
                  <td className="px-2 py-4 text-center">{service.PKT}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServicesTable;
