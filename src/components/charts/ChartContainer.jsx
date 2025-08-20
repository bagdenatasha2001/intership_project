import React from 'react'
import DonutChart from './DonutChart'
import Donut_2 from './Donut_2'
import ChartHeader from './ChartHeader'

export default function ChartContainer() {
  return (
    <>
      <div className='w-full flex flex-col lg:flex-row h-auto lg:h-[550px]   justify-center items-center   lg:justify-around lg:items-stretch   p-3 lg:space-x-5 space-y-5 lg:space-y-0 '>

       
        <div className='w-full lg:w-[50%] flex flex-col'>
         
          <ChartHeader
            title="Internship Listing Analytics"
            buttonText="More Information"
            onButtonClick={() => console.log("first button clicked!")} />

        
          <div className='w-full max-w-[565px]  h-full max-h-[480px] max-sm:z flex flex-col items-center bg-[#FBFBFB] p-3 justify-center '>
            <DonutChart />
            <div className='flex items-center space-x-3 justify-center mt-2'>
              <div className='w-3 h-3 bg-[#bee3e3] rounded-[3px]'></div>
              <p style={{ color: '#555', fontSize: '14px' }}>2025</p>
            </div>
          </div>
        </div>

       
        <div className='w-full lg:w-[50%] flex flex-col'>
        
          <ChartHeader
            title="Internship"
            buttonText="More Information"
            onButtonClick={() => console.log("second button clicked!")}/>

          <div className='w-full max-w-[565px] h-full max-h-[480px] flex flex-col items-center bg-[#FBFBFB] p-3 justify-center'>
            <Donut_2 />
            <div className='flex items-center space-x-3 justify-center mt-2'>
              <div className='w-3 h-3 bg-[#bee3e3] rounded-[3px]'></div>
              <p style={{ color: '#555', fontSize: '14px' }}>2025</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
