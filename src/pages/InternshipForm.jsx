import React, { useState } from "react";


export default function IntershipForm() {
  const [formData, setFormData] = useState({
    internshipName: "",
    location: "",
    jobType: "",
    duration: "",
    positions: "",
    hours: "",
    hoursUnit: "Week",
    compensation: "Yes",
    compensationAmount: "",
    startDate: "",
    endDate: "",
    status: "Open",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className=" text-black p-6 rounded-lg w-full max-w-5xl mx-auto border border-gray-33">



        <form className="space-y-6">

          <div className="grid grid-cols-2 ">
            <div className=" w-[100%]">
              <label className="block text-black mb-2 text-sm ">Internship Name</label>
              <input
                type="text"
                name="internshipName"
                value={formData.internshipName}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white text-black border border-gray-33 "
                placeholder="Java"
              />
            </div>

            <div>
              <label className="block text-black mb-2 text-sm">Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 rounded bg-white border border-gray-33 text-gray-400" >
                <option value="">Select Location</option>
                <option value="Riyadh">Riyadh</option>
                <option value="Jeddah">Jeddah</option>
              </select>
            </div>
          </div>


        </form>
      </div>



    </>
  )
}
