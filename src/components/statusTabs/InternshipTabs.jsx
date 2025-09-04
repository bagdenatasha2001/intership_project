import React from "react";
import { NavLink } from "react-router-dom";
import UserIcon from "../../assets/images/user.svg?react";
import LockIcon from "../../assets/images/lock.svg?react";
import SearchIcon from "../../assets/images/search.svg?react";
import TargetIcon from "../../assets/images/Target.svg?react";

export default function InternshipTabs() {
  const tabs = [
    { icon: UserIcon, label: "Internship Details", path: "/internship-details" },
    { icon: LockIcon, label: "Criteria", path: "/internship-criteria" },
    { icon: SearchIcon, label: "Roles and Responsibilities", path: "/internship-role" },
    { icon: TargetIcon, label: "Expectations", path: "/internship-expectation" },
  ];

  return (
    <div className="flex  p-4 border-b border-[#D8DAE5] mb-5">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={index}
            to={tab.path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 font-medium transition-all duration-300 ${
                isActive
                  ? "text-[#006666] border-b-4 border-teal-600"
                  : "text-gray-800 hover:text-[#006666]"
              }`
            }>
            <Icon className="h-5 w-5" /> 
            <span>{tab.label}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
