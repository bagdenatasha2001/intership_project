import React from 'react'
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function Button( {text , onClick,type="button"}) {
  return (
    <div>
         <button
        type={type}  onClick={onClick} className="w-full py-2 bg-black text-white font-inter text-sm font-semibold rounded-md hover:bg-gray-500 transition">
        <span className="flex items-center justify-center gap-2">
          {text}
         <HiOutlineArrowUpRight />
        </span>
      </button>
      
    </div>
  )
}
