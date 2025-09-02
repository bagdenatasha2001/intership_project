import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/images/user.png";
import img2 from "../../assets/images/vector.png";
import img3 from "../../assets/images/search.png";
import img4 from "../../assets/images/Icon.png";

export default function IntershipTabs() {
  const tabs = [
    { icon: img1, label: "Internship Details", path: "/internship-details" },
    { icon: img2, label: "Criteria", path: "/internship-criteria" },
    { icon: img3, label: "Roles and Responsibilities", path: "/internship-role" },
    { icon: img4, label: "Expectations", path: "/internship-expectation" },
  ];

  return (
    <div className="flex gap-10 p-4 border-b border-[#D8DAE5] mb-5">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 font-medium text-gray-800 transition-all duration-300
             ${isActive ? "text-[#006666] border-b-4 border-teal-600" : "hover:text-[#006666]"}`
          }>
          <img src={tab.icon} alt={tab.label} className="h-5 w-5" />
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </div>
  );
}

