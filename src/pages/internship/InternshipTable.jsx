import React from "react";
import StatusTabs from "../../components/statusTabs/StatusTabs"
import eye from "../../assets/images/eye_icon.png";
import pencil from "../../assets/images/pencil_icon.png";
import trash from "../../assets/images/trash_icon.png";
import Danger from "../../assets/images/DangerCircle.svg";
import Pagination from "../../components/statusTabs/Pagination";
import { useNavigate } from "react-router-dom";

export default function IntershipTable() {
  const navigate = useNavigate();

  const internships = [
    { title: "UI / UX Designer", InternshipID: "00147825", Duration: "3 Months", StartDate: "25 May 2025", EndDate: "25 May 2025", JobType: "Remote", Status: "Open" },
    { title: "Business Development Executive Intern", InternshipID: "00147825", Duration: "3 Months", StartDate: "25 May 2025", EndDate: "25 May 2025", JobType: "On-Site", Status: "On Hold" },
    { title: "Data Analyst", InternshipID: "00147825", Duration: "3 Months", StartDate: "25 May 2025", EndDate: "25 May 2025", JobType: "Remote", Status: "Inactive" },
    { title: "Back-end Intern", InternshipID: "00147825", Duration: "6 Months", StartDate: "25 May 2025", EndDate: "25 May 2025", JobType: "On-Site", Status: "Closed" },
    { title: "Frontend Intern", InternshipID: "00147825", Duration: "3 Months", StartDate: "25 May 2025", EndDate: "25 May 2025", JobType: "On-Site", Status: "On Hold" },
    { title: "Business Development Executive intern", InternshipID: "00147825", Duration: "6 Months", StartDate: "25 May 2025", EndDate: "25 May 2025", JobType: "Remote", Status: "Inactive" },
    { title: "Frontend Intern", InternshipID: "00147825", Duration: "6 Months", StartDate: "25 May 2025", EndDate: "25 May 2025", JobType: "On-Site", Status: "Closed" },
    { title: "Back-end Intern", InternshipID: "00147825", Duration: "3 Months", StartDate: "25 May 2025", EndDate: "25 May 2025", JobType: "On-Site", Status: "Inactive" },
  ];

  return (
    <>
      <div className="h-auto my-5 w-full  rounded-xl border border-gray-33">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 p-4 w-full flex-wrap min-h-20">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="text-xl font-bold text-black py-1">Internship</h2>
            <StatusTabs />
          </div>

          <button
            onClick={() => navigate("/internship-details")}
            className="bg-[#006666] text-white px-4 py-[10px] rounded-lg hover:bg-[#042424] transition" >
            Add New Internship
          </button>
        </div>
        <div>
          <div className="bg-white p-3 py-3 w-full h-full flex flex-col">
            <div
              className="overflow-y-auto flex-1 min-h-0 space-x-2"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#006666 transparent" }} >
              <table className="text-base text-left w-full">
                <thead>
                  <tr className="text-gray-400 border-b text-[12px]">
                    <th>Internship</th>
                    <th>Internship ID</th>
                    <th>Duration</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Job Type</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {internships.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 gap-3">
                      <td className="py-5 text-[14px] font-normal">{item.title}</td>
                      <td className="text-[12px] text-gray-400">{item.InternshipID}</td>
                      <td className="text-[12px] text-gray-400">{item.Duration}</td>
                      <td>
                        <span className="px-3 py-1 rounded-full text-[12px] bg-gray-100">{item.StartDate}</span>
                      </td>
                      <td>
                        <span className="px-3 py-1 rounded-full text-[12px] bg-gray-100">{item.EndDate}</span>
                      </td>
                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-[12px] ${item.JobType === "Remote"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-orange-100 text-orange-600"
                            }`}
                        >
                          {item.JobType}
                        </span>
                      </td>
                      <td>

                        <div className="relative inline-block  group ">
                          <span
                            className={`gap-2 px-3 rounded-full text-[12px] inline-flex items-center   ${item.Status === "Open"
                                ? "text-green-600 bg-green-100"
                                : item.Status === "On Hold"
                                  ? "text-yellow-600 bg-yellow-100 "
                                  : item.Status === "Closed"
                                    ? "text-red-600 bg-red-100"
                                    : "text-gray-600 bg-gray-100"
                              }`}>
                            <span
                              className={`w-2 h-2 rounded-full  ${item.Status === "Open"
                                  ? "bg-green-500"
                                  : item.Status === "On Hold"
                                    ? "bg-yellow-500"
                                    : item.Status === "Closed"
                                      ? "bg-red-500"
                                      : "bg-gray-500"
                                }`}
                            ></span>
                            {item.Status}

                            {item.Status === "Closed" && (
                              <img
                                src={Danger}
                                className="ml-1 cursor-pointer "
                                alt="danger"
                              />
                            )}
                          </span>
                          {item.Status === "Closed" && (
                            <div className="absolute mt-6 bg-[#EFEFEF] text-black text-sm px-3 py-2 rounded-md shadow z-10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                              This vacancy has been closed by <br />the admin.
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="flex items-center justify-center py-5 gap-1">
                        <button className="text-blue-500">
                          <img src={eye} alt="view" />
                        </button>
                        <button className="text-green-500">
                          <img src={pencil} alt="edit" />
                        </button>
                        <button className="text-red-500">
                          <img src={trash} alt="delete" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
