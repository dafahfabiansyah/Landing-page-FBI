import React from "react";
import { BoomData } from "@/data/BoomData";

const BoomTable = () => {
  return (
    <section>
      <div className="flex flex-col h-80 mx-10">
        <div className="flex-grow overflow-auto">
          <table className="relative w-full border">
            <thead>
              <tr>
                <th className="sticky top-0 px-6 w-96 text-white rounded-tl-md bg-[#2E2E2E]">
                  mini pump
                </th>
                <th className="sticky top-0 px-6 w-96 text-white bg-[#2E2E2E]">
                  moli pump
                </th>
                <th className="sticky top-0 px-6 w-96 text-white bg-[#2E2E2E]">
                  standard pump
                </th>
                <th className="sticky top-0 px-6 w-96 text-white bg-[#2E2E2E]">
                  long boom
                </th>
                <th className="sticky top-0 px-6 w-96 text-white bg-[#2E2E2E]">
                  semi - long boom
                </th>
                <th className="sticky top-0 px-6 w-96 text-white bg-[#2E2E2E]">
                  superlong boom
                </th>
                <th className="sticky top-0 px-6 w-96 text-white bg-[#2E2E2E]">
                  double superlong boom
                </th>
                <th className="sticky top-0 px-6 w-96 text-white rounded-tr-md bg-[#2E2E2E]">
                  extra double superlong boom
                </th>
              </tr>
            </thead>
            <tbody>
              {BoomData.map((pump, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#1EB442]" : "bg-[#FFFFFF]"}
                >
                  <td className="px-2 py-4 text-center">{pump.Mutu_K}</td>
                  <td className="px-2 py-4 text-center">{pump.Mutu_FC}</td>
                  <td className="px-2 py-4 text-center">{pump.slump}</td>
                  <td className="px-2 py-4 text-center">{pump.PKT}</td>
                  <td className="px-2 py-4 text-center">{pump.Mutu_K}</td>
                  <td className="px-2 py-4 text-center">{pump.Mutu_FC}</td>
                  <td className="px-2 py-4 text-center">{pump.slump}</td>
                  <td className="px-2 py-4 text-center">{pump.PKT}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BoomTable;
