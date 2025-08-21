import React from 'react'

export default function ChartHeader({ title, buttonText,onButtonClick}) {

 
  return (
    <>
    <div className="flex justify-between items-center bg-white p-2 rounded-lg  w-full mb-5  ">
     
      <h2 className="text-xl font-bold text-black py-1">
        {title}
      </h2>

  
      <button
        onClick={onButtonClick}
        className="bg-[#006666] text-white px-4 py-[10px] rounded-lg hover:bg-black transition ">
        {buttonText}
       
      </button>
    </div>

      
    </>
  )
}
