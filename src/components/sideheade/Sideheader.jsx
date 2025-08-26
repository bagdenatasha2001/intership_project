import React from 'react';
import logo from '../../assets/images/logo.svg';
import { RxDashboard } from "react-icons/rx";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import logout from '../../assets/images/Logout.png';

export default function Sideheader({ open }) {
  return (
    <div
      className={`flex flex-col font-inter mx-auto transition-all duration-300 bg-[#D1DDDD]
      ${open ? 'w-64 md:w-48' : 'w-0'} md:w-48 overflow-hidden relative h-full`}>

      <div className="flex flex-col w-full gap-5 mt-4 ">
        <a href="/" className="cursor-pointer py-2">
          <img src={logo} alt="GoGrand Logo" className="w-[161px] h-[44px]" />
        </a>
        <div className="flex items-center hover:bg-[#006666] rounded-md group space-x-3 w-[192px] h-[48px] p-3">
          <RxDashboard size={22} className="text-gray-800 group-hover:text-white" />
          <a href="dashboard" className="text-base font-medium text-gray-600 group-hover:text-white cursor-pointer" > Dashboard </a>
        </div>
        <div className="flex items-center hover:bg-[#006666] rounded-md group space-x-3 w-[192px] h-[48px] p-3">
          <LuGraduationCap size={22} className="text-gray-800 group-hover:text-white" />
          <a href="internship" className="text-base font-medium text-gray-600 group-hover:text-white cursor-pointer" >  Internship</a>
        </div>
        <div className="flex items-center hover:bg-[#006666] rounded-md group space-x-3 w-[192px] h-[48px] p-3">
          <HiOutlineUserGroup size={22} className="text-gray-800 group-hover:text-white" />
          <a href="" className="text-base font-medium text-gray-600 group-hover:text-white cursor-pointer">  Applicants</a>
        </div>
      </div>
      <div className="absolute bottom-3 w-full flex justify-center">
        <button
          className="flex items-center justify-center border border-[#006666] hover:bg-[#006666] group rounded-xl space-x-3 w-[192px] h-[48px]">
          <a href="/" className="font-bold group-hover:text-white">Logout</a>
          <img src={logout} alt="logout" className="w-5 filter group-hover:invert transition" />
        </button>
      </div>
    </div>
  );
}
