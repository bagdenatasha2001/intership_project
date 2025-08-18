import React from 'react'
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function Button( {text , onClick,type="button"}) {
  return (
    <div>
        <button
        type={type}  onClick={onClick} className="w-full h-[50px]  mt-[40px] bg-black text-white font-inter text-sm font-semibold rounded-md hover:bg-[#006666] transition">
        <span className="flex gap-[10px] text-xl font-normal justify-center items-center">
          {text}
         <HiOutlineArrowUpRight size={23} />
        </span>
      </button>
      
    </div>
  )
}
