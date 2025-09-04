import React, { useState } from "react";
import IntershipTabs from "../../components/statusTabs/IntershipTabs";
import MultiSelectDropdown from "../../components/statusTabs/MultiSelectDropdown";
import QualificationDropdown from "../../components/statusTabs/QualificationDropdown";
import Button from "../../components/statusTabs/Button";
import { useNavigate } from "react-router-dom";

export default function InternshipCriteria() {

  const navigate = useNavigate()
  const [search, setSearch] = useState("");

  const [selectedSkills, setSelectedSkills] = useState([]);

  const skills = ["Exception Handling", "Exception Handling", "Exception Handling",
    "Collections Framework", "Collections Framework", "Collections Framework", "Collections Framework",
    "File Handling", "File Handling", "File Handling", "File Handling"];

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
      <div className="text-black px-3 rounded-lg w-full h-auto  my-5  mx-auto border border-gray-300">
        <div>
          <IntershipTabs />
        </div>
        <form>
          <div className="p-[10px] border rounded-md w-full  shadow h-full ">
            <h2 className="text-sm font-semibold text-gray-600 mb-2">Skills</h2>
            <div className="flex items-center border rounded-md px-3 py-2 mb-4">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
              <input
                type="text" placeholder="Search by name or email" className="w-full outline-none h-6  text-sm" value={search}
                onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {filteredSkills.map((skill, index) => (
                <label key={index} className="flex items-center space-x-2 text-base ">
                  <input
                    type="checkbox"
                    checked={selectedSkills.includes(skill)}
                    onChange={() => handleCheckboxChange(skill)}
                    className="w-4 h-4" />
                  <span className="text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <div className=" h-[82px] mt-5 flex flex-wrap ">
            <p className="text-sm font-semibold text-gray-600 mb-[10px] w-full">GPA</p>
            <MultiSelectDropdown />
          </div>
          <div className=" h-[82px] mt-5 flex flex-wrap ">
            <p className="text-sm font-semibold  text-gray-600k mb-[10px] w-full">Qualification</p>
            <QualificationDropdown />
          </div>

          <div className=" mt-5 flex flex-wrap mb-5 ">
            <p className="text-sm font-semibold  text-gray-600k mb-[10px] w-full h-4">Description</p>
            <div className="py-[10px] px-4 border border-gray-300 rounded-md">
              <div className="flex flex-col text-sm text-black gap-[10px] font-light ">
                <p>We are looking for a passionate Java Developer to design, develop and maintain enterprise-level applications. You will work alongside senior developers, participate in code reviews, and build scalable backend systems.</p>
                <p>Java Developer (Intern / Entry-Level)  </p>
                <p>Engineering / Development</p>
                <p>3 to 6 months (extendable or PPO based on performance)</p>

              </div>
            </div>
          </div>
          <div className="mt-32 p-5">
            <Button
              title1="Cancel"
              title2="Next"
              onClick1={() => navigate("/internship-details")}
              onClick2={() => navigate("/internship-role")} 
              isSubmit={false} 
              />


          </div>
        </form>
      </div>
    </>
  );
}
