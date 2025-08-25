import React from 'react'

export default function Kpi_card({ title, value, icon: Icon }) {
  return (
    <div className="flex justify-between items-center bg-[rgb(251,251,251)] rounded-xl shadow p-3  w-full font-['Inter'] border border-gray-33">
      <div className='gap-1'>
        <p className="text-[12px] font-medium text-gray-600 leading-4 ">{title}</p>
        <h2 className="text-2xl font-semibold text-[#006666] mt-3">{value}</h2>
      </div>
      <div className="bg-[#F2F2F2] flex rounded-lg h-[50px] w-[65px] items-center justify-center">
        <Icon size={28} className="text-black font-medium" />
      </div>
    </div>
  )
}
