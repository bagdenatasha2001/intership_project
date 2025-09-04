
import React from 'react'
import Intership from './Internship.jsx'
import RecentApplicants from './RecentApplicants.jsx'

export default function IntershipTableContainer() {
  return (
    <>
      <div
        className='w-full flex flex-col lg:flex-row    h-auto lg:h-[550px] justify-center items-center  lg:justify-around lg:items-stretch  p-2 lg:space-x-5 space-y-5 lg:space-y-0' >
        <div className='w-full lg:w-[50%] flex flex-col justify-center items-center'>
          <Intership />
        </div>
        <div className='w-full lg:w-[50%] flex flex-col justify-center items-center'>
          <RecentApplicants />
        </div>
      </div>
    </>
  )
}
