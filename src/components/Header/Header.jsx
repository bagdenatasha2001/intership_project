import React from 'react';
import logo from '../../assets/images/header_logo.png';
import hr_img from '../../assets/images/hr_img.png';
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu } from 'react-icons/hi';

export default function Header({ onToggleSidebar }) {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className='w-[98%] mx-auto h-[53px] flex justify-between items-center p-3 mt-4'>
        <div className='flex items-center'>
          <button
            className="md:hidden mr-3 text-gray-800"
            onClick={onToggleSidebar} >
            <HiOutlineMenu size={25} />
          </button>
          <div>
            <span className='text-[20px]'>Dashboard Overview</span>
            <p className='text-[14px] text-gray-500 font-normal'>Tue, 14 Nov, 2022, 11.30 AM</p>
          </div>
        </div>
        <div className='mt-[-4px]'>
          <img src={logo} alt="company logo" className='h-[49px]' />
        </div>
        <div className='flex w-[184px] items-center justify-between h-[50px] p-1 rounded-[10px] border border-gray-400 mx-2'>
          <div>
            <img src={hr_img} alt="HR Image" className='w-[40px] h-[40px] rounded-[8px]' />
          </div>
          <div className='font-semibold text-[14px]'>
            <p>Haya Shaikh <span className='text-gray-500 text-[12px] font-medium'><br />HR Manager</span></p>
          </div>
          <div className='h-[20px] font-bold'>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="w-full border-b border-gray-33 mt-6"></div>
    </div>
  );
}
