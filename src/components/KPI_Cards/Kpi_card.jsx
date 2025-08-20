import React from 'react'

export default function Kpi_card({ title, value, icon: Icon }) {
  return (
    <div className="flex justify-between items-center bg-[rgb(251,251,251)] rounded-xl shadow p-4 h-[120px] w-full font-['Inter']">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <h2 className="text-2xl font-semibold text-[#006666]">{value}</h2>
      </div>

      <div className="bg-[#F2F2F2] flex rounded-lg h-[50px] w-[50px] items-center justify-center">
        <Icon size={28} className="text-black font-medium" />
      </div>
    </div>
  )
}
