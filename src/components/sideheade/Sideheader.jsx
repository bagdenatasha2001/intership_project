import React from 'react';
import logo from '../../assets/Images/logo.svg';
import { RxDashboard } from "react-icons/rx";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import logout from '../../assets/images/logout.png'
import { useNavigate } from 'react-router-dom';
export default function Sideheader({ open }) {
  const navigate = useNavigate();
  const goToLogin = () => navigate('/');

  return (
    <div
      className={`flex flex-col font-inter items-center mx-auto
      transition-all duration-300
      ${open ? 'w-64' : 'w-0'} md:w-48 overflow-hidden`}>
      <div className="flex flex-col items-center w-full p-4">
        <div className='w-[192px] h-[60px] mt-[24px] cursor-pointer'>
          <img src={logo} alt="GoGrand Logo" onClick={goToLogin} />
        </div>
        <div className="space-y-5 mt-6 w-full">
          <div className="flex items-center px-4 py-2 hover:bg-[#006666] rounded-md group">
            <RxDashboard size={22} className="text-gray-800 group-hover:text-white" />
            <span className="ml-3 text-base font-medium text-gray-600 group-hover:text-white">Dashboard</span>
          </div>
          <div className="flex items-center px-4 py-2 hover:bg-[#006666] rounded-md group">
            <LuGraduationCap size={22} className="text-gray-800 group-hover:text-white" />
            <span className="ml-3 text-base font-medium text-gray-600 group-hover:text-white">Internship</span>
          </div>
          <div className="flex items-center px-4 py-2 hover:bg-[#006666] rounded-md group">
            <HiOutlineUserGroup size={22} className="text-gray-800 group-hover:text-white" />
            <span className="ml-3 text-base font-medium text-gray-600 group-hover:text-white">Applicants</span>
          </div>
        </div>
        <div className=" w-full mt-[300px]">
          <button
            onClick={goToLogin}
            className="flex items-center justify-center w-full px-4 py-3 border border-[#006666] hover:bg-[#006666] group rounded-xl">
            <span className="mr-2 font-bold group-hover:text-white">Logout</span>
            <img src={logout} alt="arrow" className="w-5 filter group-hover:invert transition" />
          </button>
        </div>
      </div>
    </div>
  );
}
