import React from "react";
import { FiEye } from "react-icons/fi";
import img1 from '../../assets/images/t-1.svg';
import img2 from '../../assets/images/t-2.svg';
import img3 from '../../assets/images/t-3.svg';
import img4 from '../../assets/images/t-4.svg';
import img5 from '../../assets/images/t-5.svg';
import img6 from '../../assets/images/t-6.svg';
import img7 from '../../assets/images/t-7.svg';

export default function RecentApplicants() {

  const internships = [
    { img: img1, name: "Sabeena Farooq", internshipType: "UI/UX Design Intern", AppliedDate: "12 July 2025", Action: <FiEye size={20} /> },
    { img: img2, name: "Ayeza Khan", internshipType: "Product Manager", AppliedDate: "12 July 2025", Action: <FiEye size={20} /> },
    { img: img3, name: "Ameer Gilani", internshipType: "Frontend Developer", AppliedDate: "12 July 2025", Action: <FiEye size={20} /> },
    { img: img4, name: "Hamza Ali Abbasi", internshipType: "Backend Developer", AppliedDate: "12 July 2025", Action: <FiEye size={20} /> },
    { img: img5, name: "Fawad Khan", internshipType: "Fullstack Developer", AppliedDate: "12 July 2025", Action: <FiEye size={20} /> },
    { img: img6, name: "Sajal Aly", internshipType: "UX Designer", AppliedDate: "12 July 2025", Action: <FiEye size={20} /> },
    { img: img7, name: "Mikaal Zulfiqar", internshipType: "QA Engineer", AppliedDate: "12 July 2025", Action: <FiEye size={20} /> },
  ];

  return (
    <div className="bg-white p-3  shadow w-full h-full flex flex-col rounded-2xl border border-gray-33">
      <div className="flex justify-between items-center mb-4 px-3">
        <h2 className="text-md font-semibold">Recent Applied Date</h2>
        <button className="bg-gray-100 text-[#0F172A] text-[14px] font-normal px-3 py-1 rounded-full mr-6">128 New Applicants</button>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          View All
        </a>
      </div>
      <div className="overflow-y-auto flex-1 min-h-0"
      style={{ scrollbarWidth: "thin", scrollbarColor: "#006666 transparent" }}>

        <table className="text-sm text-left w-full">
          <thead>
            <tr className="text-gray-400 border-b text-[12px]">
              <th className="py-3 px-3">Name of Applied Date</th>
              <th className="py-3 px-3">Internship Type</th>
              <th className="py-3 px-3">Applied Date</th>
              <th className="py-3 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 gap-2">
                <td className="py-4 px-3 flex items-center gap-2">
                  <img src={item.img} alt={item.name} className="h-[40px] w-[40px] rounded-full" />
                  <p className="font-normal text-[12px]">{item.name}</p>
                </td>
                <td className="py-4 px-3 text-[12px]">{item.internshipType}</td>
                <td className="py-4 px-3 text-[12px]">{item.AppliedDate}</td>
                <td className="py-4 px-7 font-bold ">{item.Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
