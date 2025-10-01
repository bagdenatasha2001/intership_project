import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Application_Dropdown from '../../components/statusTabs/Application_Dropdown';
import Pagination from '../../components/statusTabs/Pagination';
import { FiEye } from "react-icons/fi";
import img1 from '../../assets/images/appli_1.jpg';
import img2 from '../../assets/images/appli_2.jpg';
import img3 from '../../assets/images/appli_3.jpg';
import img4 from '../../assets/images/appli_4.jpg';
import img5 from '../../assets/images/appli_5.jpg';
import img6 from '../../assets/images/appli_6.jpg';
import img7 from '../../assets/images/appli_7.jpg';

export default function ApplicationTable() {

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const internships = [
    { img: img1, name: "Sabeena Farooq", ApplicationID: "00124567", Major: "Bachelor of Accounting", Internship: "UI/UX Design Intern 00147825", EmailAddress: "olivia@untitledui.com", AppliedDate: "25 May 2025", Action: <FiEye size={20} /> },
    { img: img2, name: "Ayeza Khan", ApplicationID: "00124567", Major: "Bachelor of Advertising", Internship: "Product Manager 00147825", EmailAddress: "phoenix@untitledui.com", AppliedDate: "25 May 2025", Action: <FiEye size={20} /> },
    { img: img3, name: "Ameer Gilani", ApplicationID: "00124567", Major: "Bachelor of Aerospace Engineering", Internship: "Frontend Developer 00147825", EmailAddress: "lana@untitledui.com", AppliedDate: "25 May 2025", Action: <FiEye size={20} /> },
    { img: img4, name: "Hamza Ali Abbasi", ApplicationID: "00124567", Major: "Bachelor of Agricultural Economics", Internship: "Backend Developer 00147825", EmailAddress: "demi@untitledui.com", AppliedDate: "25 May 2025", Action: <FiEye size={20} /> },
    { img: img5, name: "Fawad Khan", ApplicationID: "00124567", Major: "Bachelor of Agricultural Economics", Internship: "Fullstack Developer 00147825", EmailAddress: "candice@untitledui.com", AppliedDate: "25 May 2025", Action: <FiEye size={20} /> },
    { img: img6, name: "Sajal Aly", ApplicationID: "00124567", Major: "Bachelor of Agricultural Economics", Internship: "UX Designer 00147825", EmailAddress: "natali@untitledui.com", AppliedDate: "25 May 2025", Action: <FiEye size={20} /> },
    { img: img7, name: "Mikaal Zulfiqar", ApplicationID: "00124567", Major: "Bachelor of Agricultural Economics", Internship: "UX Copywriter 00147825", EmailAddress: "drew@untitledui.com", AppliedDate: "25 May 2025", Action: <FiEye size={20} /> },
    { img: img7, name: "Mikaal Zulfiqar", ApplicationID: "00124567", Major: "Bachelor of Agricultural Economics", Internship: "QA Engineer Intern 00147825", EmailAddress: "kate@untitledui.com", AppliedDate: "25 May 2025", Action: <FiEye size={20} /> },
  ];

  const filteredInternships = internships.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.EmailAddress.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="rounded-lg w-full h-auto my-3  border shadow-md border-gray-300 flex-wrap ">

        <div className='flex px-6 py-4 gap-9 '>
          <div className="flex gap-2 justify-center items-center">
            <h2 className="text-[14px] font-semibold">Applications</h2>
            <span className="bg-gray-100 text-[#006666] text-[12px] px-2 font-normal py-1 rounded-full h-6">
              1000+ Applicants
            </span>
          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center h-auto w-full px-3 py-2 relative ">

          <div className="relative flex items-center w-full md:w-2/5">
            <span className="absolute left-3 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>

            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email"
              className="h-[50px] w-[80%] pl-10 pr-3 border text-[14px] rounded-xl text-gray-500 focus:outline-gray-300"
            />
          </div>

          <div className="flex rounded-xl h-[50px] w-full md:w-3/5 mt-2 md:mt-0">
            <Application_Dropdown />
          </div>

        </div>


        <div className="overflow-x-auto ">
          <table className="min-w-[900px] table-auto text-[12px] text-left w-full border-collapse">
            <thead>
              <tr className="text-gray-600 border-b whitespace-nowrap text-[12px]  bg-gray-50">
                <th className="py-5 px-4">Name of Applicants</th>
                <th className="py-5 px-4">Application ID</th>
                <th className="py-5 px-4">Major</th>
                <th className="py-5 px-4">Internship</th>
                <th className="py-5 px-4">Email address</th>
                <th className="py-5 px-">Applied Date</th>
                <th className="py-5 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredInternships.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 whitespace-nowrap">
                  <td className="py-4 flex items-center px-1 gap-2 text-[12px]">
                    <img src={item.img} alt={item.name} className="h-[40px] w-[40px] rounded-full" />
                    <p className="font-normal">{item.name}</p>
                  </td>
                  <td className="py-4 px-6 text-[12px]">{item.ApplicationID}</td>
                  <td className="py-4 px-3 text-[12px]">{item.Major}</td>
                  <td className="py-4 px-4 text-[12px]">{item.Internship}</td>
                  <td className="py-4 px-4 text-[12px]">{item.EmailAddress}</td>
                  <td className="py-4 px-4">
                    <span className="whitespace-nowrap px-2 py-1 rounded-full text-[#006666] text-[11px] bg-gray-100">{item.AppliedDate}</span>
                  </td>
                  <td className="py-4 px-4 font-bold cursor-pointer"
                    onClick={() => navigate("/Application-view")} >
                    {item.Action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className='p-3'>
          <Pagination />
        </div>

      </div>
    </>
  );
}
