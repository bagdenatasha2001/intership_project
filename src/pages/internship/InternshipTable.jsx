
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StatusTabs from "../../components/statusTabs/StatusTabs";
import eye from "../../assets/images/eye_icon.png";
import pencil from "../../assets/images/pencil_icon.png";
import trash from "../../assets/images/trash_icon.png";
import Danger from "../../assets/images/DangerCircle.svg";
import Pagination from "../../components/statusTabs/Pagination";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../assets/images/delete_icon.jpg";

export default function InterngitshipTable() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const internships = [
    { title: "UI / UX Designer", InternshipID: "00147825", Duration: "3-Months", StartDate: "25/05/2025", EndDate: "31/07/2025", JobType: "Remote", Status: "Open" },
    { title: "Business Development Executive Intern", InternshipID: "00147825", Duration: "3-Months", StartDate: "25/05/2025", EndDate: "31/07/2025", JobType: "On-Site", Status: "On Hold" },
    { title: "Data Analyst", InternshipID: "00147825", Duration: "3-Months", StartDate: "25/05/2025", EndDate: "31/07/2025", JobType: "Remote", Status: "Inactive" },
    { title: "Back-end Intern", InternshipID: "00147825", Duration: "6-Months", StartDate: "25/05/2025", EndDate: "31/07/2025", JobType: "On-Site", Status: "Closed" },
    { title: "Frontend Intern", InternshipID: "00147825", Duration: "3-Months", StartDate: "25/05/2025", EndDate: "31/07/2025", JobType: "On-Site", Status: "On Hold" },
    { title: "Business Development Executive intern", InternshipID: "00147825", Duration: "6-Months", StartDate: "25/05/2025", EndDate: "31/07/2025", JobType: "Remote", Status: "Inactive" },
    { title: "Frontend Intern", InternshipID: "00147825", Duration: "6-Months", StartDate: "25/05/2025", EndDate: "31/07/2025", JobType: "On-Site", Status: "Closed" },
    { title: "Back-end Intern", InternshipID: "00147825", Duration: "3-Months", StartDate: "25/05/2025", EndDate: "31/07/2025", JobType: "On-Site", Status: "Inactive" },
  ];

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDelete = () => {
    setShowPopup(false);
    toast.success("internship is deleted successfully!");

  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="rounded-lg w-full h-auto   border shadow-md border-gray-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 p-4 w-full flex-wrap min-h-20 ">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="text-2xl font-bold text-black py-1">Internship</h2>
            <StatusTabs />
          </div>

          <button
            onClick={() => navigate("/internship-details")}
            className="bg-[#006666] text-white px-4 py-[10px] rounded-lg hover:bg-[#042424] transition text-base">
            Add New Internship
          </button>
        </div>

        <div className="bg-white  py-3 w-full h-full flex flex-col ">
          <div className="overflow-x-auto w-full">
            <div className="overflow-y-auto min-h-0">
              <table className="min-w-[800px] text-base text-left w-full">
                <thead>
                  <tr className="text-gray-600 border-b text-[14px]   bg-gray-50">
                    <th className="py-2 px-2">Internship</th>
                    <th className="py-2">Internship ID</th>
                    <th className="py-2">Duration</th>
                    <th className="py-2">Start Date</th>
                    <th className="py-2">End Date</th>
                    <th className="py-2">Job Type</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {internships.map((item, index) => (
                    <tr key={index} className="border-b gray-200 gap-2">
                      <td className="whitespace-nowrap text-[14px] font-normal px-2">{item.title}</td>
                      <td className="whitespace-nowrap text-[14px] text-gray-500 p-0">{item.InternshipID}</td>
                      <td className="whitespace-nowrap text-[14px] text-gray-500 font-extralight">{item.Duration}</td>
                      <td>
                        <span className="whitespace-nowrap px-2 py-1 rounded-full text-[#006666] font-semibold text-[12px] bg-gray-100">{item.StartDate}</span>
                      </td>
                      <td>
                        <span className="whitespace-nowrap px-2 py-1 rounded-full text-[#006666] font-semibold  text-[12px] bg-gray-100">{item.EndDate}</span>
                      </td>
                      <td>
                        <span className={`whitespace-nowrap px-2 py-1 rounded-full text-[13px] ${item.JobType === "Remote" ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"}`}>
                          {item.JobType}
                        </span>
                      </td>
                      <td>
                        <div className="relative inline-block group">
                          <span className={`gap-2 px-2 rounded-full text-[13px] inline-flex items-center ${item.Status === "Open" ? "text-green-600 bg-green-100" : item.Status === "On Hold" ? "text-yellow-600 bg-yellow-100" : item.Status === "Closed" ? "text-red-600 bg-red-100" : "text-gray-600 bg-gray-100"}`}>
                            <span className={`w-2 h-2 rounded-full ${item.Status === "Open" ? "bg-green-500" : item.Status === "On Hold" ? "bg-yellow-500" : item.Status === "Closed" ? "bg-red-500" : "bg-gray-500"}`}></span>
                            {item.Status}
                            {item.Status === "Closed" && <img src={Danger} className="ml-1 cursor-pointer size-[10px]" alt="danger" />}
                          </span>
                          {item.Status === "Closed" && (
                            <div className="absolute mt-1 bg-[#EFEFEF] text-black text-[11px] px-1 py-1 rounded-md shadow z-10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                              This vacancy has been closed by <br />the admin.
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="flex items-center  py-4 ">
                        <button className="text-blue-500">
                          <img src={eye} alt="view" className="size-22" />
                        </button>
                        <button className="text-green-500">
                          <img src={pencil} alt="edit" className="size-22" />
                        </button>
                        <button className="text-red-500" onClick={() => setShowPopup(true)}>
                          <img src={trash} alt="delete" className="size-22" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            

            </div>
          </div>
           
        </div>
      </div>

       <div className="my-6">  <Pagination /></div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-[400px] h-[268px] flex flex-col relative p-6">
            <div className="flex flex-col">
              <img src={deleteIcon} alt="Success" className="size-12" />
              <div className="font-bold leading-snug mt-5">
                <span className="text-lg font-medium">Delete Post</span>
                <p className="mt-2 text-[14px] font-normal text-[#667085]">Are you sure you want to delete this post? This action cannot be undone.</p>
              </div>
            </div>

            <div>
              <div className="flex gap-3 mt-[34px]">
                <button onClick={closePopup} className="text-black border border-gray-300 rounded-md w-[170px] h-[44px] flex items-center justify-center font-bold">
                  Cancel
                </button>

                <button onClick={handleDelete} className="border border-gray-300 bg-[#FF383C] text-white rounded-md w-[170px] h-[44px] flex items-center justify-center font-bold">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
