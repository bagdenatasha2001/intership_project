import React, { useState } from "react";
import IntershipTabs from "../../components/statusTabs/IntershipTabs";

export default function InternshipCriteria() {
  const [search, setSearch] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = ["Exception Handling","Exception Handling","Exception Handling", 
    "Collections Framework","Collections Framework","Collections Framework","Collections Framework",
     "File Handling", "File Handling", "File Handling" ,"File Handling"  ];

  const handleCheckboxChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((item) => item !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="text-black p-3 rounded-lg w-full h-auto my-5 mx-auto border border-gray-300">
        <div>
          <IntershipTabs />
        </div>

        <div className="p-4 border rounded-md w-full  bg-white shadow">

          <h2 className="text-sm font-semibold text-blue-900 mb-2">Skills</h2>

          <div className="flex items-center border rounded-md px-3 py-2 mb-4">
            <svg className="w-5 h-5 text-gray-400 mr-2"  fill="none"  stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or email"
              className="w-full outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedSkills.includes(skill)}
                  onChange={() => handleCheckboxChange(skill)}
                  className="w-5 h-5"
                />
                <span className="text-gray-700">{skill}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
