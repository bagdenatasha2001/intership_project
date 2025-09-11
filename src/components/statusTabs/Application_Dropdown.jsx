import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Application_Dropdown() {
  const [openTab, setOpenTab] = useState(null);

  const toggleTab = (tabName) => {
    setOpenTab(openTab === tabName ? null : tabName);
  };

  const [majorData, setMajorData] = useState([
    { id: 1, name: "Bachelor of Accounting", checked: true },
    { id: 2, name: "Product Manager", checked: true },
    { id: 3, name: "Backend Developer", checked: false },
    { id: 4, name: "QA Engineer", checked: false },
    { id: 5, name: "UX Designer", checked: false },
  ]);

  const [universityData, setUniversityData] = useState([
    { id: 1, name: "Al Baha University", checked: true },
    { id: 2, name: "Abdulrahman Bin Faisal University", checked: false },
    { id: 3, name: "Al Faisal University", checked: false },
    { id: 4, name: "Al Yamamah University", checked: false },
  ]);

  const [locationData, setLocationData] = useState([
    { id: 1, name: "Al Kharj", checked: true },
    { id: 2, name: "Al Majma'ah", checked: false },
    { id: 3, name: "Al Muzahimiyah", checked: false },
    { id: 4, name: "Shaqra", checked: false },
  ]);

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedGPA, setSelectedGPA] = useState("80 - 89%");

  const handleCheckboxChange = (id, data, setData) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setData(updated);
  };

  return (
    <div className="w-fit">
      <div className="flex  relative border border-gray-300 rounded-lg  bg-white">

     
        <div className="relative">
          <button
            className="border px-4 py-2 rounded flex items-center"
            onClick={() => toggleTab("status")}>
            Status : <IoIosArrowDown />
          </button>
          {openTab === "status" && (
            <div className="absolute top-full left-0 bg-white shadow p-4 mt-1 rounded w-48 z-10">
              {["All", "Open", "On-Hold", "Inactive", "Closed"].map((status) => (
                <div
                  key={status}
                  className={`p-1 cursor-pointer ${
                    selectedStatus === status ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedStatus(status)}
                >
                  {status}
                </div>
              ))}
            </div>
          )}
        </div>

      
        <div className="relative">
          <button
            className="border px-4 py-2 rounded flex items-center"
            onClick={() => toggleTab("major")}
          >
            Major <IoIosArrowDown />
          </button>
          {openTab === "major" && (
            <div className="absolute top-full left-0 bg-white shadow p-4 mt-1 rounded w-64 z-10">
              <input
                type="text"
                placeholder="Search by course name"
                className="w-full border p-2 rounded mb-2"
              />
              <div className="flex flex-wrap gap-2 mb-2">
                {majorData
                  .filter((m) => m.checked)
                  .map((m) => (
                    <span key={m.id} className="bg-blue-100 px-2 rounded-full">
                      {m.name} ×
                    </span>
                  ))}
              </div>
              <div className="max-h-40 overflow-y-auto">
                {majorData.map((m) => (
                  <label key={m.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={m.checked}
                      onChange={() =>
                        handleCheckboxChange(m.id, majorData, setMajorData)
                      }
                    />
                    <span>{m.name}</span>
                  </label>
                ))}
              </div>
              <div className="flex justify-end mt-2 space-x-2">
                <button className="border px-4 py-1 rounded">Cancel</button>
                <button className="bg-green-600 text-white px-4 py-1 rounded">Apply</button>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            className="border px-4 py-2 rounded flex items-center"
            onClick={() => toggleTab("university")}
          >
            University <IoIosArrowDown />
          </button>
          {openTab === "university" && (
            <div className="absolute top-full left-0 bg-white shadow p-4 mt-1 rounded w-64 z-10">
              <input
                type="text"
                placeholder="Search by university"
                className="w-full border p-2 rounded mb-2"
              />
              <div className="flex flex-wrap gap-2 mb-2">
                {universityData
                  .filter((u) => u.checked)
                  .map((u) => (
                    <span key={u.id} className="bg-blue-100 px-2 rounded-full">
                      {u.name} ×
                    </span>
                  ))}
              </div>
              <div className="max-h-40 overflow-y-auto">
                {universityData.map((u) => (
                  <label key={u.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={u.checked}
                      onChange={() =>
                        handleCheckboxChange(u.id, universityData, setUniversityData)
                      }
                    />
                    <span>{u.name}</span>
                  </label>
                ))}
              </div>
              <div className="flex justify-end mt-2 space-x-2">
                <button className="border px-4 py-1 rounded">Cancel</button>
                <button className="bg-green-600 text-white px-4 py-1 rounded">Apply</button>
              </div>
            </div>
          )}
        </div>

       
        <div className="relative">
          <button
            className="border px-4 py-2 rounded flex items-center"
            onClick={() => toggleTab("location")}
          >
            Location <IoIosArrowDown />
          </button>
          {openTab === "location" && (
            <div className="absolute top-full left-0 bg-white shadow p-4 mt-1 rounded w-64 z-10">
              <input
                type="text"
                placeholder="Search by location"
                className="w-full border p-2 rounded mb-2"
              />
              <div className="flex flex-wrap gap-2 mb-2">
                {locationData
                  .filter((l) => l.checked)
                  .map((l) => (
                    <span key={l.id} className="bg-blue-100 px-2 rounded-full">
                      {l.name} ×
                    </span>
                  ))}
              </div>
              <div className="max-h-40 overflow-y-auto">
                {locationData.map((l) => (
                  <label key={l.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={l.checked}
                      onChange={() =>
                        handleCheckboxChange(l.id, locationData, setLocationData)
                      }
                    />
                    <span>{l.name}</span>
                  </label>
                ))}
              </div>
              <div className="flex justify-end mt-2 space-x-2">
                <button className="border px-4 py-1 rounded">Cancel</button>
                <button className="bg-green-600 text-white px-4 py-1 rounded">Apply</button>
              </div>
            </div>
          )}
        </div>

      
        <div className="relative">
          <button
            className="border px-4 py-2 rounded flex items-center"
            onClick={() => toggleTab("gpa")}
          >
            GPA <IoIosArrowDown />
          </button>
          {openTab === "gpa" && (
            <div className="absolute top-full left-0 bg-white shadow p-4 mt-1 rounded w-48 z-10">
              {["90 - 100%", "80 - 89%", "70 - 79%", "60 - 69%", "Below 60%"].map(
                (gpa) => (
                  <label key={gpa} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={selectedGPA === gpa}
                      onChange={() => setSelectedGPA(gpa)}
                    />
                    <span>{gpa}</span>
                  </label>
                )
              )}
              <div className="flex justify-end mt-2 space-x-2">
                <button className="border px-4 py-1 rounded">Cancel</button>
                <button className="bg-green-600 text-white px-4 py-1 rounded">Apply</button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}






