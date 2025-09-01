import React, { useState } from "react";
import IntershipTabs from "../../components/statusTabs/IntershipTabs";
import calender from '../../assets/images/Calender.png';
import button from '../../components/statusTabs/Button';
import Button from "../../components/statusTabs/Button";

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
      <div className="text-black p-3 rounded-lg w-full h-auto my-5  mx-auto border border-gray-33">
        <div>
          <IntershipTabs />
        </div>

        <form>
          <div className="flex w-full justify-start gap-5">
            <div className="flex flex-col w-[728px] h-[82px] ">
              <label className="text-sm font-semibold text-blue-900 mb-2 ">
                Internship Name
              </label>
              <input
                type="text"
                defaultValue="Java"
                className="w-full py-3 px-4 border rounded-md bg-white text-gray-600 font-medium focus:outline-none focus:border-blue-900 " />
            </div>

            <div className="flex  w-[362px] flex-col h-[82px] ">
              <label className="text-sm font-semibold text-blue-900 mb-2">
                Location
              </label>
              <select className="w-full py-3 px-4 border rounded-md bg-white text-gray-600 font-normal focus:outline-none focus:border-blue-900">
                <option> Riyadh</option>
                <option>Jeddah</option>
                <option>Dammam</option>
              </select>
            </div>
          </div>

          <div className="flex w-full  mt-[30px] h-auto p-1 ">
            <div className=" flex gap-[30px] w-full ">
              <div className=" w-1/2 ">
                <p className="text-sm font-semibold text-blue-900 mb-[10px] ">Job Type</p>
                <div className="flex gap-[10px]">
                  <div className=" w-1/2  h-[56px] flex items-center justify-center rounded-md  border bg-white text-[#63678A] text-sm">
                    Remote
                  </div>
                  <div className=" w-1/2 flex items-center justify-center rounded-md border bg-white text-[#63678A] text-sm">
                    On-Site
                  </div>
                </div>
              </div>


              <div className=" w-1/2 flex gap-[30px] ">
                <div className="w-full ">
                  <p className="text-sm font-semibold text-blue-900 mb-[10px]">Duration</p>
                  <select className="border py-2 px-4 text-sm rounded-md bg-white h-[56px] w-full text-gray-600 font-medium focus:outline-none focus:border-blue-900">
                    <option>6 Months</option>
                    <option>3 Months </option>
                    <option>12  Months</option>
                  </select>
                </div>

                <div className="w-full">
                  <p className="text-sm font-semibold text-blue-900 mb-[10px]">Positions</p>
                  <select className=" border py-2 px-4  text-sm rounded-md bg-white h-[56px] w-full text-gray-600 font-medium focus:outline-none focus:border-blue-900">
                    <option>6</option>
                    <option>3</option>
                    <option>5</option>
                    <option>15</option>
                    <option>10</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full  mt-[30px] h-auto">
            <div className="flex gap-6  w-full">
              <div className=" flex gap-6 w-1/2">
                <div className=" w-[161px]   ">
                  <p className="text-[12px] font-semibold text-[#1F2A44] mb-[10px]">Hours (Optional)</p>
                  <div className="w-full h-[56px] justify-center flex items-center bg-white  border  text-sm rounded-md">
                    <p className="w-12 justify-center items-center flex">40</p>
                    <select className=" border-l-2 mr-3 text-sm  w-full h-fit bg-white  text-gray-600 font-medium focus:outline-none focus:border-blue-90 ">
                      <span><option> Week</option></span></select>
                  </div>
                </div>
                <div className=" w-[161px]   ">
                  <p className="text-[12px] font-semibold text-[#1F2A44] mb-[10px]"> Compensation</p>
                  <div className="w-full h-[56px] justify-center flex items-center bg-white  border  text-sm rounded-md">
                    <select className=" text-sm m-3  w-full h-fit bg-white  text-gray-600 font-medium focus:outline-none focus:border-blue-90 ">
                      <span><option> Yes</option></span>
                      <span><option> NO</option></span></select>
                  </div>
                </div>

                <div className=" w-[161px]   ">
                  <p className="text-[12px] font-semibold text-[#1F2A44] mb-[10px]"> Compensation Amount</p>
                  <div className="w-full h-[56px] justify-center flex items-center bg-white text-gray-600  border  text-sm rounded-md">
                    SAR 100.00
                  </div>
                </div>
              </div>

              <div className=" flex gap-6 w-1/2">

                <div className="w-1/2">
                  <p className="text-[12px] font-semibold text-[#1F2A44] mb-[10px]"> Start Date</p>
                  <div className="w-full h-[56px] p-4 items-center flex  bg-white text-gray-600  border  text-sm rounded-md">
                    <span >23 May 2025</span>
                    <img src={calender} className="ml-16" />
                  </div>
                </div>

                <div className=" w-1/2">
                  <p className="text-[12px] font-semibold text-[#1F2A44] mb-[10px]"> End Date</p>
                  <div className="w-full h-[56px] p-4 flex  items-center bg-white text-gray-600  border  text-sm rounded-md">
                    <span >23 Sep 2025</span>
                    <img src={calender} className="ml-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex w-full  mt-[30px] h-auto p-1 ">
            <div className=" w-[300px]   ">
              <p className="text-[12px] font-semibold text-[#1F2A44] mb-[10px]"> StInternship Status</p>
              <div className="w-full h-[56px] justify-center flex items-center bg-white  border  text-sm rounded-md">
                <select className=" text-sm m-3  w-full h-fit bg-white  text-gray-600 font-medium focus:outline-none focus:border-blue-90 ">
                  <span><option>Open</option></span>
                  <span><option> Closed</option></span></select>
              </div>
            </div>

          </div>
          <div className="mt-40">
            <Button />
          </div>

        </form>
      </div>
    </>
  );
}


