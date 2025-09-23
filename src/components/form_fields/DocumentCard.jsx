
import React, { useRef } from 'react'

import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { PiEyeBold } from "react-icons/pi";

export default function DocumentCard({ label, title, subtitle, status, showBorder = true }) {

  const fileInputRef = useRef(null);

  const handleLabelClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  let icon1;
  let icon2;

  if (status === "pending") {
    icon1 = <FaCheck className="bg-green-600 text-white size-6 rounded-full p-1 mb-1" />;
    icon2 = <RxCross2 className="bg-red-500 text-white size-6 rounded-full p-1" />;
  } else if (status === "rejected") {
    icon1 = < PiEyeBold  className="bg-[#006666] text-white size-6 rounded-full p-1 mb-1" />;
    icon2 = <RxCross2 className="bg-red-500 text-white size-6 rounded-full p-1 text-base" />;
  } else if (status === "success") {
    icon1 = < PiEyeBold  className="bg-[#006666] text-white size-6 rounded-full p-1 mb-1" />;
    icon2 = <FaCheck className="bg-green-600 text-white size-6 rounded-full p-1" />;
  }

  return (
    <>
      <div className="flex justify-between rounded-xl shadow-sm bg-[#F8F7F7] overflow-hidden w-[268px] h-auto min-h-[70px] mb-4">

    
        <div  onClick={handleLabelClick}
          className="bg-[#006666] text-white font-medium rounded-l-xl w-[60px] text-center py-6 cursor-pointer">
          {label}

          
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={(e) => console.log("Selected file:", e.target.files[0])}
          />
        </div>

        <div className="flex flex-col justify-center p-2 ">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        {showBorder && <div className="w-[2px] h-full bg-gray-300"></div>}

        <div className="flex flex-col justify-center items-center gap-2 p-1">
          <div className="p-1">
            {icon1} {icon2}
          </div>
        </div>
      </div>
    </>
  )
}
