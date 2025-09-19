import React from 'react'
import { HiArrowLongLeft } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import DocumentCard from '../../components/form_fields/DocumentCard';

export default function ApplicationView() {
    return (
        <>
            <div className='flex flex-col flex-wrap m-2 font-inter '>

                <div className=' sm:flex   flex-col sm:mb-5 md:flex-row justify-between  h-auto min-h-[50px] mt-3 mb-5'>

                    <div className='mb-3  sm:mb-3 flex  gap-2 items-center '>
                        <span><HiArrowLongLeft /></span>
                        Applicant Management System/ View Applicants Details
                    </div>

                    <div className='  flex gap-4 '>
                        <button className='flex items-center gap-[10px] h-[50px] bg-red-100 py-[13px] px-5 rounded-lg text-red-400'>
                            <span><RxCross1 /></span>
                            Reject
                        </button>
                        <button className='flex items-center gap-[10px] h-[50px] bg-[#E5F3EB] py-[13px] px-5 rounded-lg text-teal-700'>
                            <span><FaCheck /></span>
                            Approved
                        </button>
                    </div>
                </div>


                <div className=' bg-gray-50  h-auto min-h-[152px] border border-gray-300 rounded-lg mb-[30px] p-5'>

                    <div className='mb-[26px] text-[20px] font-medium text-[#525256]' >Personal Information</div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-4 flex-wrap'>
                            <span className='text-[12px] font-normal text-[#051B44]'>First Name</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>Alya</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Last Name</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>Shaikh</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Applied Date</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>25 May 2025</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Mobile Number</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>+966 50 123 4567</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Email Address</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>alyashaikhl@gmail.com</span>
                        </div>

                    </div>

                </div>

                <div className=' bg-gray-50 h-auto min-h-[152px] border border-gray-300 rounded-lg  mb-[30px] p-5'>

                    <div className='mb-[26px] text-[20px] font-medium text-[#525256]' >Education Information</div>
                    <div className='flex w-full '>
                        <div className='flex flex-col gap-4 w-1/2'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Course Name</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>B.Tech In Computer </span>
                        </div>
                        <div className='flex flex-col gap-4 '>
                            <span className='text-[12px] font-normal text-[#051B44]'>GPA</span>
                            <div className='text-[14px] font-medium text-[#696F8C]'>80 - 89% <span>4.0</span> </div>
                        </div>
                    </div>


                </div>

                <div className=' bg-gray-50 h-auto min-h-[152px] border border-gray-300 rounded-lg mb-[30px] p-5'>
                    <div className='mb-[26px] text-[20px] font-medium text-[#525256]' >Internship Information</div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Internship</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>UI / UX Designer</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Internship ID</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>00147825</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Duration</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>3 Months</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Start Date</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>25 May 2025</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>End Date</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>25 May 2025</span>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <span className='text-[12px] font-normal text-[#051B44]'>Job Type</span>
                            <span className='text-[14px] font-medium text-[#696F8C]'>Remote</span>
                        </div>
                    </div>
                </div>

                <div className=' bg-gray-50 h-auto min-h-[526px] border-l border-gray-300 rounded-lg mb-[30px] p-5'>
                      <div className='mb-[26px] text-[20px] font-medium text-[#525256]' >View All Documents</div>
                      <div>
                        <DocumentCard
                         label="Pdf"
                         title="National ID"
                         subtitle="Passport, driving license"
            
                       
                          />
                      </div>

                </div>














            </div>
        </>
    )
}

