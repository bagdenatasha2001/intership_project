import React, { useState } from 'react'
import { HiArrowLongLeft } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import DocumentCard from '../../components/form_fields/DocumentCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ApplicationView() {


    const [RejectModel, setRejectModel] = useState(false)


    const Rejectiondone = () => {
        setRejectModel(false);
        toast.error("Rejection email has been sent successfully!");

    }

    function handleApprove() {

        toast.success("Document Approved Successfully!");
    }




    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
            <div className='flex flex-col flex-wrap  font-inter my-3 mx-2 '>


                <div className=' sm:flex  flex-col  md:flex-row justify-between items-center  h-auto  mb-5'>

                    <div className='sm:mb-3 flex  gap-2 items-center py-[13px] '>
                        <span><HiArrowLongLeft /></span>
                        Applicant Management System / View Applicants Details
                    </div>

                    <div className='flex gap-4 '>
                        <button onClick={() => setRejectModel(true)}
                            className='flex items-center gap-[10px] h-[50px] bg-red-100 py-[13px] px-5 rounded-lg text-red-400 relative'>
                            <span><RxCross1 /></span>
                            Reject
                        </button>
                        <button
                            onClick={handleApprove}
                            className='flex items-center gap-[10px] h-[50px] bg-[#E5F3EB] py-[13px] px-5 rounded-lg text-teal-700'>
                            <span><FaCheck /></span>
                            Approved
                        </button>
                    </div>

                </div>


                {RejectModel && (
                    <div className='bg-white flex flex-col w-[400px]   right-44 absolute mt-[75px] rounded-lg border p-6 font-inter' >
                        <div>
                            <div className='mb-2 text-[18px]'>Candidate Rejection</div>
                            <div className='px-4 py-[10px] border border-gray-300 rounded text-[#696F8C] text-base '>We appreciate the time and effort you invested in applying with us. Although you were not selected this time, please don’t be discouraged. We wish you the very best in your journey and hope to cross paths again! </div>

                            <div className="flex gap-3 mt-8">
                                <button className="border rounded-md w-1/2 bg-white p-2 border-gray-300"
                                    onClick={() => setRejectModel(false)}  > Cancel</button>

                                <button className="bg-[#D92D20] text-white w-1/2 rounded-md border border-gray-300"
                                    onClick={Rejectiondone} >submit</button>
                            </div>

                        </div>
                    </div>

                )}








                <div className=' bg-gray-50  h-auto  border border-gray-300 rounded-lg p-5 mb-[30px] '>

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

                <div className=' bg-gray-50 h-auto  border border-gray-300 rounded-lg  p-5 mb-[30px]'>

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

                <div className=' bg-gray-50 h-auto min-h-[152px] border border-gray-300 rounded-lg  p-5  mb-[30px]'>
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



                <div className=' bg-gray-50 h-auto  border border-gray-300 rounded-lg mb-[30px] p-5 justify-between'>
                    <div className='mb-[26px] text-[20px] font-medium text-[#525256]' >View All Documents</div>



                    <div className=' bg-gray-50 h-auto  rounded-lg   mb-[26px]'>
                        <div className='mb-[26px]'>25 Jul 2025</div>
                        <div className=' flex  gap-4'>
                            <DocumentCard
                                label="Pdf"
                                title="National ID"
                                subtitle="Passport, driving license"
                                status="pending"

                            />
                            <DocumentCard
                                label="Pdf"
                                title="University Letter"
                                subtitle="Acceptance letter"
                                status="pending"
                            />

                        </div>
                    </div>


                    <div className=''>
                        <div className='mb-4'>20 Jul 2025</div>

                        <div className='flex flex-wrap gap-3 '>

                            <DocumentCard
                                label="Pdf"
                                title="National ID"
                                subtitle="Passport, driving license"
                                status="rejected"
                            />

                            <DocumentCard
                                label="Pdf"
                                title="University Letter"
                                subtitle="Acceptance letter"
                                status="rejected"
                            />

                            <DocumentCard
                                label="Pdf"
                                title="Transcript"
                                subtitle="Your documents"
                                status="success"
                            />

                            <DocumentCard
                                label="Pdf"
                                title="Other"
                                subtitle="Your documents"
                                status="success"
                            />

                        </div>
                    </div>
                </div>


                <div className=' bg-gray-50 h-auto  border border-gray-300 rounded-lg  p-5  mb-[30px]'>
                    <div className='mb-[26px]'>Company Documents</div>

                    <div className=' flex  gap-4'>
                        <DocumentCard
                            label="Pdf"
                            title="Document 1 "
                            subtitle="Acceptance letter"
                            showBorder={false}
                        />
                        <DocumentCard
                            label="Pdf"
                            title="Document 2"
                            subtitle="Acceptance letter"
                            showBorder={false}
                        />

                    </div>
                </div>

                <div className=' bg-gray-50 h-auto   border border-gray-300 rounded-lg  p-5  '>
                    <div className='mb-[26px]'>Add Comments</div>
                    <textarea className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006666] resize-none" rows={4}
                        placeholder="Add comments" />

                </div>

            </div>
        </>
    )
}

