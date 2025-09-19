import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";


export default function DocumentCard({ label, title, subtitle,  icon }) {
  return (
    <>
    <div className="flex items-center justify-between rounded-lg  shadow-sm bg-[#F8F7F7] overflow-hidden w-[268px]  h-auto min-h-[70px]">
     
      <div className="bg-[#006666] text-white  font-medium rounded-l-lg w-[70px] text-center py-5">{label}</div>
      <div className="flex-1 px-4  border-r border-gray-300 ">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
       
      </div>
      
      <div className="px-2 py-2 justify-center items-center ">
          <FaCheck className="bg-green-500 text-white w-6 h-6 mb-2 rounded-full p-1" />
          <RxCross1 className="bg-red-500  text-white w-6 h-6 mb-2 rounded-full p-1" />
      </div>
    </div>
      
    </>
  )
}
