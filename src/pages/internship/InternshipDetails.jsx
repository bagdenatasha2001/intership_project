import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InternshipTabs from "../../components/statusTabs/InternshipTabs";
import Dropdown from "../../components/form_fields/Dropdown";
import Hours from "../../components/form_fields/Hours";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../../components/statusTabs/Button";

export default function InternshipDetails() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    internshipName: "",
    location: "",
    duration: "",
    positions: "",
    compensation: "",
    compensationAmount: "",
    hours: 40,
    hoursUnit: "Week",
    startDate: null,
    endDate: null,
    status: "",
    jobType: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (
      !formData.internshipName ||
      !formData.location ||
      !formData.duration ||
      !formData.positions ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.status ||
      !formData.jobType
    ) {
      alert("Please fill the form before proceeding.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Form Data:", formData);

    navigate("/internship-criteria");
  };

  const locationOptions = [
    { value: "Riyadh", label: "Riyadh" },
    { value: "Dubai", label: "Dubai" },
    { value: "Mumbai", label: "Mumbai" },
  ];

  const durationOptions = [
    { value: "3 Months", label: "3 Months" },
    { value: "6 Months", label: "6 Months" },
    { value: "1 Year", label: "1 Year" },
  ];

  const positionsOptions = [
    { value: "2", label: "2" },
    { value: "4", label: "4" },
    { value: "6", label: "6" },
  ];

  const yesNoOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  const amountOptions = [
    { value: "100", label: "SAR 100.00" },
    { value: "200", label: "SAR 200.00" },
    { value: "300", label: "SAR 300.00" },
  ];

  const statusOptions = [
    { value: "Open", label: "Open" },
    { value: "Closed", label: "Closed" },
  ];

  return (
    <div className="px-3 rounded-lg w-full h-auto py-6 my-5 mx-auto border border-gray-300">
      <div>
        <InternshipTabs />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex w-full justify-start gap-5">
          <div className="flex flex-col w-[728px]">
            <label className="text-sm font-semibold text-[#051B44] mb-2">
              Internship Name
            </label>
            <input
              type="text"
              value={formData.internshipName}
              onChange={(e) => handleChange("internshipName", e.target.value)}
              placeholder="Java"
              className="w-full h-[56px] px-4 border rounded-md bg-white text-gray-600 font-medium focus:outline-none focus:border-blue-900"
            />
          </div>

          <div className="flex w-[362px] flex-col">
            <Dropdown
              label="Location"
              options={locationOptions}
              value={formData.location}
              onChange={(val) => handleChange("location", val)}
            />
          </div>
        </div>

        <div className="flex w-full mt-[30px] gap-5 justify-between">
          <div className="flex flex-col w-1/3">
            <label className="text-sm font-semibold text-[#051B44] mb-2">
              Job Type
            </label>
            <div className="flex items-center gap-6 h-[56px] px-2 border rounded-md bg-white">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Remote"
                  checked={formData.jobType === "Remote"}
                  onChange={(e) => handleChange("jobType", e.target.value)}
                />
                Remote
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="On-Site"
                  checked={formData.jobType === "On-Site"}
                  onChange={(e) => handleChange("jobType", e.target.value)}
                />
                On-Site
              </label>
            </div>
          </div>

          <div className="w-1/3">
            <Dropdown
              label="Duration"
              options={durationOptions}
              value={formData.duration}
              onChange={(val) => handleChange("duration", val)} />
          </div>

          <div className="w-1/3">
            <Dropdown
              label="Positions"
              options={positionsOptions}
              value={formData.positions}
              onChange={(val) => handleChange("positions", val)} />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5 mt-[30px] p-4 rounded-md">
          <Hours
            value={formData.hours}
            unit={formData.hoursUnit}
            onChangeHours={(val) => handleChange("hours", val)}
            onChangeUnit={(val) => handleChange("hoursUnit", val)} />

          <Dropdown
            label="Compensation"
            options={yesNoOptions}
            value={formData.compensation}
            onChange={(val) => handleChange("compensation", val)} />

          <Dropdown
            label="Compensation Amount"
            options={amountOptions}
            value={formData.compensationAmount}
            onChange={(val) => handleChange("compensationAmount", val)} />

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-[#051B44] mb-2">
              Start Date
            </label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) => handleChange("startDate", date)}
              className="w-full h-[56px] border rounded-md px-4 text-gray-600"
              placeholderText="Select" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-[#051B44] mb-2">
              End Date
            </label>
            <DatePicker
              selected={formData.endDate}
              onChange={(date) => handleChange("endDate", date)}
              className="w-full h-[56px] border rounded-md px-4 text-gray-600"
              placeholderText="Select " />
          </div>
        </div>

        <div className="flex w-full mt-[30px]">
          <div className="w-[300px]">
            <Dropdown
              label="Internship Status"
              options={statusOptions}
              value={formData.status}
              onChange={(val) => handleChange("status", val)} />
          </div>
        </div>

        <div className="p-5 mt-20">
          <Button
            title1="Cancel"
            title2="Next"
            onClick1={() => navigate("/internship-table")}
            bg2="bg-gray-200"
            isSubmit={true} />
        </div>
      </form>
    </div>
  );
}
