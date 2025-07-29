import React from 'react'
import logo1 from '../../assets/images/logo.png'

export default function Logo() {
  return (
    <>
     

    <div className="flex items-center  absolute left-6 z-10 rounded-md mt-7 ">
  <img src={logo1} alt="GoGrand Logo" className="w-16  " />
  <span className="text-2xl font-bold text-white font-inter items-center">Go Grads</span>
</div>

      
    </>
  )
}
