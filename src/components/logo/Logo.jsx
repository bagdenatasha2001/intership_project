

import React from 'react'
import logo1 from '../../assets/images/logo.png'

export default function Logo() {
  return (
    <>
      <div 
        className=" flex items-center z-10 mt-4  left-10 absolute">

        <img src={logo1} alt="GoGrand Logo" className="h-[83px]" />
        <div className="text-[28px] font-bold text-white font-inter">Go Grads</div>

      </div>
    </>
  )
}
