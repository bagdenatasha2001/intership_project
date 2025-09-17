import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import InternshipTabs from "../../components/statusTabs/InternshipTabs";
import Button from "../../components/statusTabs/Button";
import MultiSelectDropdown from "../../components/statusTabs/MultiSelectDropdown";
import TextEditor from "../../components/form_fields/TextEditor";
export default function InternshipCriteria() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gpa: [],
      qualification: [],
      skills: [],
      description: "",
    },
  });

  const skillsOptions = [
    "File Handling",
    "Exception Handling",
    "Collections Framework",
    "React",
    "Node.js",
    "Exception Handling",
    "Collections Framework",
    "File Handling",
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

  const onSubmit = (data) => {
    console.log("Criteria Form Data:", data);
    navigate("/internship-role");
  };

  return (
    <div className="px-3 rounded-lg w-full h-auto py-6 my-5 mx-auto border border-gray-300">
      <InternshipTabs />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">


        <div className="flex flex-col w-full mb-6 border border-gray-200 rounded-md p-[10px]">
          <label className="text-sm font-semibold text-[#051B44] mb-2">Skills</label>
          <div className="relative w-full mb-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by skill"
              className="w-full h-[56px] pl-10 pr-3 border rounded-md bg-white text-gray-600 font-normal focus:outline-none focus:border-gray-400"
            />
          </div>
          <Controller
            name="skills"
            control={control}
            rules={{ required: "At least one skill is required" }}
            render={({ field }) => (
              <div className="grid grid-cols-3 gap-4  p-4 max-h-60 overflow-y-auto bg-white">
                {filteredSkills.map((skill, index) => (
                  <label key={index} className="flex items-center gap-2 font-normal text-base">
                    <input
                      type="checkbox"
                      checked={field.value.includes(skill)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          field.onChange([...field.value, skill]);
                        } else {
                          field.onChange(field.value.filter((s) => s !== skill));
                        }
                      }}
                    />
                    {skill}
                  </label>
                ))}
              </div>
            )}
          />
          {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills.message}</p>}
        </div>


        <div className="flex flex-col w-full mb-6">
          <label className="text-sm font-semibold text-[#051B44] mb-2">GPA</label>
          <Controller
            name="gpa"
            control={control}
            rules={{ required: "GPA is required" }}
            render={({ field }) => (
              <MultiSelectDropdown
                options={gpaOptions}
                placeholder="Select"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.gpa && <p className="text-red-500 text-sm mt-1">{errors.gpa.message}</p>}
        </div>


        <div className="flex flex-col w-full mb-6">
          <label className="text-sm font-semibold text-[#051B44] mb-2">Qualification</label>
          <Controller
            name="qualification"
            control={control}
            rules={{ required: "Qualification is required" }}
            render={({ field }) => (
              <MultiSelectDropdown
                options={qualificationOptions}
                placeholder="Select"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.qualification && <p className="text-red-500 text-sm mt-1">{errors.qualification.message}</p>}
        </div>


        <div className="flex flex-col w-full mb-6">
          <label className="text-sm font-semibold text-[#051B44] mb-2">Description</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <TextEditor
                value={field.value}
                onChange={field.onChange}

              />
            )}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div className="p-5 mt-10">
          <Button
            title1="Back"
            title2="Next"
            onClick1={() => navigate("/internship-table")}
            bg2="bg-gray-300"
            isSubmit={true}
          />
        </div>
      </form>
    </div>
  );
}
