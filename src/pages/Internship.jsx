import React from "react";
import StatusTabs from "../components/statusTabs/StatusTabs";

export default function Intership() {
  return (
    <>
      <div className="h-screen p-3 mb-4 w-full  shadow rounded-xl mt-4 border border-gray-33">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 p-4w-full flex-wrap min-h-20">

          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="text-xl font-bold text-black py-1">Internship</h2>
            <StatusTabs />
          </div>

          <button
            onClick={() => console.log("Add internship details")}
            className="bg-[#006666] text-white px-4 py-[10px] rounded-lg hover:bg-[#042424] transition">
            Add New Internship
          </button>
        </div>
      </div>
    </>
  )
}
