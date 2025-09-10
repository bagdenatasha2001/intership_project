import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InternshipTabs from "../../components/statusTabs/InternshipTabs";
import Button from "../../components/statusTabs/Button";
import MultiSelectDropdown from "../../components/statusTabs/MultiSelectDropdown";

export default function InternshipCriteria() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    gpa: [],
    qualification: [],
    skills: [],
    description: "",
  });

  const [search, setSearch] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  const validateForm = () => {
    if (
      formData.gpa.length === 0 ||
      formData.qualification.length === 0 ||
      formData.skills.length === 0 ||
      !formData.description.trim()
    ) {
      alert("Please fill all fields before proceeding.");
      return false;
    }
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Criteria Form Data:", formData);
    navigate("/internship-role");
  };

  const skillsOptions = [
    "File Handling",
    "Exception Handling",
    "Collections Framework",
    "Exception Handling",
    "Collections Framework",
    "File Handling",
    "Collections Framework",
    "File Handling",
    "Exception Handling",
    "File Handling",
    "Collections Framework",
    "Exception Handling",
    "React",
    "Node.js",

  ];

  const gpaOptions = [
    { value: "90-100%", label: "90 - 100%" },
    { value: "80-89%", label: "80 - 89%" },
    { value: "70-79%", label: "70 - 79%" },
    { value: "60-69%", label: "60 - 69%" },
    { value: "below-60%", label: "Below 60%" },
  ];

  const qualificationOptions = [
    { value: "B.Tech-CSE", label: "B.Tech / B.E. in CSE" },
    { value: "M.Tech-CSE", label: "M.Tech / M.E. in CSE" },
    { value: "BSc-CS", label: "B.Sc in Computer Science" },
    { value: "MSc-CS", label: "M.Sc in Computer Science" },
    { value: "B.Tech-IT", label: "B.Tech / B.E. in IT" },
    { value: "B.Tech-AIML", label: "B.Tech / B.E. in AI & ML" },
    { value: "Diploma-IT", label: "Diploma in IT" },
  ];



  const filteredSkills = skillsOptions.filter((skill) =>
    skill.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-3 rounded-lg w-full h-auto py-6 my-5 mx-auto border border-gray-300">
      <div>
        <InternshipTabs />
      </div>

      <form onSubmit={handleSubmit} className="mt-6">

        <div className="flex flex-col w-full mb-6">
          <label className="text-sm font-semibold text-[#051B44] mb-2">
            Skills
          </label>

          <div className="relative w-full mb-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email"
              className="w-full h-[40px] pl-10 pr-3 border rounded-md bg-white text-gray-600 font-medium focus:outline-none focus:border-gray-400" />
          </div>

          <div className="grid grid-cols-3 gap-4 border rounded-md p-4 max-h-60 overflow-y-auto bg-white">
            {filteredSkills.map((skill, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.skills.includes(skill)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleChange("skills", [...formData.skills, skill]);
                    } else {
                      handleChange(
                        "skills",
                        formData.skills.filter((s) => s !== skill)
                      );
                    }
                  }} />
                {skill}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full mb-6">
          <label className="text-sm font-semibold text-[#051B44] mb-2">
            GPA
          </label>
          <MultiSelectDropdown
            options={gpaOptions}
            placeholder="Select "
            value={formData.gpa}
            onChange={(val) => handleChange("gpa", val)} />
        </div>

        <div className="flex flex-col w-full mb-6">
          <label className="text-sm font-semibold text-[#051B44] mb-2">
            Qualification
          </label>
          <MultiSelectDropdown
            options={qualificationOptions}
            placeholder="Select "
            value={formData.qualification}
            onChange={(val) => handleChange("qualification", val)} />
        </div>

        <div className="flex flex-col w-full mb-6">
          <label className="text-sm font-semibold text-[#051B44] mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Enter description..."
            className="w-full h-[100px] px-4 py-2 border rounded-md bg-white text-gray-600 font-medium focus:outline-none focus:border-gray-400" />
        </div>

        <div className="p-5 mt-10">
          <Button
            title1="Back"
            title2="Next"
            onClick1={() => navigate("/internship-details")} 
             bg2="bg-gray-300"
            isSubmit={true}/>
   
        </div>



      </form>
    </div>
  );
}
