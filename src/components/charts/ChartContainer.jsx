import React from 'react'
import DonutChart from './DonutChart'
import Donut_2 from './Donut_2'
import ChartHeader from './ChartHeader';
import { useNavigate } from 'react-router-dom';

export default function ChartContainer() {
   const navigate = useNavigate();

  return (
    <>
      <div className='w-full flex flex-col lg:flex-row h-auto lg:h-[550px] justify-center items-center lg:justify-around lg:items-stretch p-3 lg:space-x-5 space-y-5 lg:space-y-0'>

        <div className='w-full lg:w-[50%] flex flex-col'>
          <ChartHeader
            title="Applicant Analytics"
            buttonText="More Information"
            onButtonClick={() =>navigate("/application-table")}
              />

          <div className='w-full h-full max-h-[480px] flex flex-col items-center bg-[#FBFBFB] p-3 justify-center rounded-2xl border border-gray-33'>
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
            onButtonClick={() =>navigate("/internship-table")} />

          <div className='w-full h-full max-h-[480px] flex flex-col items-center bg-[#FBFBFB] p-3 justify-center rounded-2xl border border-gray-33'>
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

