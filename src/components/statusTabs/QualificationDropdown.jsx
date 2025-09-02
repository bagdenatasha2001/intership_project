import React, { useState, useRef, useEffect } from "react";

export default function QualificationDropdown() {
  const options = ["B.Tech / B.E. in CSE", "M.Tech / M.E. in CSE", "B.Tech / B.E. in AI & ML", "B.Tech / B.E. in Information Security", "B.Tech / B.E. in IoT (Internet of Things)",
    "M.Tech / M.E. in Networking", "M.Tech / M.E. in Software Engineering", "B.Tech / B.E. in Cyber Security", "M.Tech / M.E. in Computer Networks", "M.Tech / M.E. in Data Science",
    "B.Tech / B.E. in AI & ML"];

  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const removeOption = (option) => {
    setSelected(selected.filter((item) => item !== option));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="w-full relative" ref={dropdownRef}>
        <div className="flex flex-wrap gap-2 border rounded p-2 items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {selected.length === 0 && (
            <span className="text-gray-400 text-sm">Select Qualification...</span>
          )}
          {selected.map((option, index) => (
            <div
              key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center text-sm">
              {option}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(option);
                }}
                className="ml-2 text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
          ))}


          <div className="ml-auto">
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${open ? "rotate-180" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>


        {open && (
          <div className="absolute left-0 w-full border rounded mt-1 bg-white shadow-lg z-10 max-h-40 overflow-y-auto ">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => toggleOption(option)}
                className={`cursor-pointer p-2 hover:bg-gray-100 ${selected.includes(option) ? "bg-gray-200" : ""
                  }`} >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

    </>
  )
}
