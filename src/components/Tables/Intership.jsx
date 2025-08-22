import React from "react";
import { BsCalendar3 } from "react-icons/bs";

export default function Intership() {
  
   const internships = [
    { title: "Java", openings: 12, applicants: 12, selected: 3 },
    { title: "UI UX Designer", openings: 20, applicants: 20, selected: 20 },
    { title: "PHP", openings: 24, applicants: 24, selected: 24 },
    { title: "Sales Executive", openings: 16, applicants: 16, selected: 16 },
    { title: "Sales Executive", openings: 16, applicants: 16, selected: 16 },
    { title: "Sales Executive", openings: 16, applicants: 16, selected: 16 },
    { title: "Sales Executive", openings: 16, applicants: 16, selected: 16 },
  ];

  return (
    <div className="bg-white p-3  shadow w-full h-full flex flex-col rounded-2xl border border-gray-33">
      <div className="flex justify-between items-center mb-4 px-3">
        <h2 className="text-lg font-semibold">Internships</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          View All
        </a>
      </div>
     <div className="overflow-x-auto overflow-y-auto flex-1 min-h-0">
        <table className=" text-base text-left w-full">
          <thead>
            <tr className="text-gray-400 border-b text-[12px]">
              <th className="py-3 px-3">Internship</th>
              <th className="py-3 px-3">Opening</th>
              <th className="py-3 px-3">Applicants</th>
              <th className="py-3 px-3">Selected</th>
              <th className="py-3 px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 ">
                <td className="py-3 px-1 flex items-center text-[14px] font-normal gap-3 justify-center">
                  <div>
                     <p className="font-normal ">{item.title}</p>
                    <p className="text-gray-400 text-[12px] flex mt-2  ">
                       <BsCalendar3 className="text-black  mr-2 font-bold mt-[2px]" />
                      25 May - July 04
                    </p>
                  </div>
                </td>
                <td className="py-3 px-3 text-[12px] ">{item.openings}</td>
                <td className="py-3 px-3 text-[12px]">{item.applicants}</td>
                <td className="py-3 px-3 text-blue-400 font-medium text-[12px]">
                  {item.selected}
                </td>

                <td className="py-3 px-3">
                  <span className="flex items-center gap-2 text-green-600 bg-green-100 px-3 py-1 rounded-full text-[12px]">
                    <span className="w-2 h-2 rounded-full bg-[#12B76A]"></span>
                    Open
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