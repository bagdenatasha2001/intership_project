import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InternshipTabs from "../../components/statusTabs/InternshipTabs";
import Button from "../../components/statusTabs/Button";

export default function InternshipExpectations() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Expectations: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.Expectations.trim()) {
      alert("Please fill the form before proceeding.");
      return false;
    }
    return true;
  };



const handleNext = (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    console.log("internship expectations Data:", formData); 
    navigate("/internship-pop-up");
  }
};

  return (
    <>
      <div className="text-black p-3 rounded-lg w-full h-auto my-5 mx-auto border border-gray-33">
        <div>
          <InternshipTabs />
        </div>

        <form>
          <div className="p-2 border border-gray-300 rounded-md ml-[21px] mr-[39px] flex flex-col gap-4 text-sm text-[#696F8C]">
            <textarea
              name="Expectations"
              value={formData.Expectations}
              onChange={handleChange}
              className="w-full p-3 border-none focus:outline-none h-40 resize-none  max-w-[1084px]"
              placeholder="Describe the expectations .."
            />
          </div>

          <div className="p-5 mt-96">
            <Button
              title1="Back"
              title2="Create Internship"
              onClick1={() => navigate("/internship-role")}
              onClick2={handleNext}
              bg2="bg-teal-800 text-white "
              isSubmit={false}
            />
          </div>
        </form>
      </div>
    </>
  );
}
