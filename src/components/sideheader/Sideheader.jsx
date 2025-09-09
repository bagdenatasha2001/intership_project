import React from 'react';
import logo from '../../assets/images/logo.svg';
import { RxDashboard } from "react-icons/rx";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi";
import logout from '../../assets/images/Logout.png';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Sideheader({ open }) {
  const location = useLocation();


  const isActivePrefix = (path) => location.pathname.startsWith(path);

  return (
    <div
      className={`flex flex-col font-inter transition-all duration-300 bg-[#D1DDDD] max-w-60 p-6
      ${open ? 'w-60 md:w-60' : 'w-0'} md:w-60 overflow-hidden relative h-full`}>

      <div className="flex flex-col  gap-5  h-[272px] w-full ">
        <Link to="/dashboard" className="cursor-pointer py-2">
          <img src={logo} alt="GoGrand Logo" className="w-[161px] h-[44px]" />
        </Link>


        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `group relative flex items-center rounded-md space-x-3 w-[192px] h-[48px] p-3
             ${isActive ? "bg-[#006666] text-white" : "hover:bg-[#006666] hover:text-white text-gray-600"}` } >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-8 bg-white rounded-md"></div>
              )}
              <RxDashboard size={22} className={`${isActive ? "text-white" : "text-gray-800 group-hover:text-white"}`} />
              <span className="text-base font-medium">Dashboard</span>
            </>
          )}
        </NavLink>


        <NavLink
          to="/internship-table"
          className={() =>
            `group relative flex items-center rounded-md space-x-3 w-[192px] h-[48px] p-3
               ${isActivePrefix("/internship") ? "bg-[#006666] text-white" : "hover:bg-[#006666] hover:text-white text-gray-600"}`} >
          <>
            {isActivePrefix("/internship") && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-8 bg-white rounded-md"></div>
            )}
            <LuGraduationCap size={22} className={`${isActivePrefix("/internship") ? "text-white" : "text-gray-800 group-hover:text-white"}`}  />
            <span className="text-base font-medium">Internship</span>
          </>
        </NavLink>



        <NavLink
          to="/application-table"
          className={({ isActive }) =>
            `group relative flex items-center rounded-md space-x-3 w-[192px] h-[48px] p-3
             ${isActive ? "bg-[#006666] text-white" : "hover:bg-[#006666] hover:text-white text-gray-600"}` }>
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-8 bg-white rounded-md"></div>
              )}
              <HiOutlineUserGroup
                size={22}
                className={`${isActive ? "text-white" : "text-gray-800 group-hover:text-white"}`}/>
              <span className="text-base font-medium">Applicants</span>
            </>
          )}
        </NavLink>
      </div>


      <div className="absolute bottom-3 w-full flex ">
        <button
          className="flex items-center justify-center border border-[#006666] hover:bg-[#006666] group rounded-xl space-x-3 w-[192px] h-[48px]">
          <Link to="/" className="font-bold group-hover:text-white">Logout</Link>
          <img src={logout} alt="logout" className="w-5 filter group-hover:invert transition" />
        </button>
      </div>
    </div>
  );
}

