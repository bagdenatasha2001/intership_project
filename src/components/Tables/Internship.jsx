import React from "react";
import { BsCalendar3 } from "react-icons/bs";

export default function Internship() {
  const internships = [
    { title: "Java", openings: 12, applicants: 12, selected: 3, Status: "Open" },
    { title: "UI UX Designer", openings: 20, applicants: 20, selected: 20, Status: "Open" },
    { title: "PHP", openings: 24, applicants: 24, selected: 24, Status: "Open" },
    { title: "Sales Executive", openings: 16, applicants: 16, selected: 16, Status: "Open" },
    { title: "Sales Executive", openings: 16, applicants: 16, selected: 16, Status: "Open" },
    { title: "Sales Executive", openings: 16, applicants: 16, selected: 16, Status: "Open" },
    { title: "Sales Executive", openings: 16, applicants: 16, selected: 16, Status: "Open" },
  ];

  return (
    <div className="bg-white p-3 shadow w-full h-full flex flex-col rounded-2xl border border-gray-33">
      <div className="flex justify-between items-center mb-4 px-3">
        <div className="flex gap-2">
          <h2 className="text-2xl font-semibold">Internships</h2>
          <span className="bg-gray-100 text-[#0F172A] text-[14px] font-normal px-2 py-1 rounded-full">
            128 New Applicants
          </span>


        </div>

        <a href="/internship-table" className="  text-gray-600 hover:text-[#006666] text-sm underline">
          View All
        </a>
      </div>

      <div
        className="overflow-y-auto flex-1 min-h-0"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#006666 transparent" }}
      >
        <table className="text-base text-left w-full">
          <thead>
            <tr className="text-gray-400 border-b text-[14px]">
              <th className="py-3 px-3">Internship</th>
              <th className="py-3 px-3">Opening</th>
              <th className="py-3 px-3">Applicants</th>
              <th className="py-3 px-3">Selected</th>
              <th className="py-3 px-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {internships.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 font-extralight">
                <td className="py-3 px-1 flex items-center text-base  font-normal gap-3 ">
                  <div>
                    <p className="font-normal">{item.title}</p>
                    <p className="text-gray-400 text-[14px] flex items-center gap-1 mt-2">
                      <BsCalendar3 className="text-black" />
                      25 May - July 04
                    </p>
                  </div>
                </td>
                <td className="text-[14px] px-6 py-1">{item.openings}</td>
                <td className="text-[14px] px-6 py-1">{item.applicants}</td>
                <td className="text-[rgb(102,112,133)] font-medium text-[14px] px-6 py-1">{item.selected}</td>
                <td className="py-3 px-1 text-center">
                  <span className="inline-flex items-center gap-2 text-green-600 bg-green-100 px-2 rounded-full text-[14px]">
                    <span className="w-2 h-2 rounded-full bg-[#12B76A] inline-block"></span>
                    {item.Status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
