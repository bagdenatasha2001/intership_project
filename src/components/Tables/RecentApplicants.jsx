import React from "react";
import { FiEye } from "react-icons/fi";
import img1 from '../../assets/images/appli_1.jpg';
import img2 from '../../assets/images/appli_2.jpg';
import img3 from '../../assets/images/appli_3.jpg';
import img4 from '../../assets/images/appli_4.jpg';
import img5 from '../../assets/images/appli_5.jpg';
import img6 from '../../assets/images/appli_6.jpg';
import img7 from '../../assets/images/appli_7.jpg';
import { Link } from "react-router-dom";

export default function RecentApplicants() {

  const internships = [
    { img: img1, name: "Sabeena Farooq", internshipType: "UI/UX Design Intern", AppliedDate: "12/06/2025", Action: <FiEye size={20} /> },
    { img: img2, name: "Ayeza Khan", internshipType: "Product Manager", AppliedDate: "12/06/2025", Action: <FiEye size={20} /> },
    { img: img3, name: "Ameer Gilani", internshipType: "Frontend Developer", AppliedDate: "12/06/2025", Action: <FiEye size={20} /> },
    { img: img4, name: "Hamza Ali Abbasi", internshipType: "Backend Developer", AppliedDate: "12/06/2025", Action: <FiEye size={20} /> },
    { img: img5, name: "Fawad Khan", internshipType: "Fullstack Developer", AppliedDate: "12/06/2025", Action: <FiEye size={20} /> },
    { img: img6, name: "Sajal Aly", internshipType: "UX Designer", AppliedDate: "12/06/2025", Action: <FiEye size={20} /> },
    { img: img7, name: "Mikaal Zulfiqar", internshipType: "QA Engineer", AppliedDate: "12/06/2025", Action: <FiEye size={20} /> },
  ];

  return (
    <div className="bg-white p-3 shadow w-full h-full flex flex-col rounded-2xl border border-gray-33 ">
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex gap-2">
          <h2 className="text-xl font-semibold">Recent Applicants</h2>
          <span className="bg-gray-100 text-[#0F172A] text-[14px] font-normal px-2 py-1 rounded-full">
            128 New Applicants
          </span>
        </div>
        <Link to="/internship-table" className=" text-gray-600 hover:text-[#006666] text-sm underline">
          View All
        </Link>
      </div>

      <div
        className="overflow-auto flex-1 min-h-0"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#006666 transparent" }}
      >
        <table className="text-sm text-left w-full whitespace-nowrap">
          <thead>
            <tr className="text-gray-400 border-b text-[14px]">
              <th className="py-3 ">Applicants Name</th>
              <th className="py-3 ">Internship Type</th>
              <th className="py-3 ">Applied Date</th>
              <th className="py-3 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 gap-2 whitespace-nowrap text-gray-500">
                <td className="py-4 flex items-center gap-2">
                  <img src={item.img} alt={item.name} className="h-[40px] w-[40px] rounded-full" />
                  <p className="font-normal text-[14px]">{item.name}</p>
                </td>
                <td className="py-4  text-[14px]">{item.internshipType}</td>
                <td className="py-4 text-[14px]">{item.AppliedDate}</td>
                <td className="py-4  font-bold">{item.Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
