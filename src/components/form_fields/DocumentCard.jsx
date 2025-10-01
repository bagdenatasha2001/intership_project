import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { PiEyeBold } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function DocumentCard({ label, title, subtitle, status, showBorder = true }) {
  const [acceptModal, setAcceptModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);

  const [acceptComment, setAcceptComment] = useState("");
  const [rejectComment, setRejectComment] = useState("");
  const [rejectError, setRejectError] = useState("");
   
  const [showPdf, setShowPdf] = useState(false);
  const [currentPdf, setCurrentPdf] = useState("");


  const handleAccept = () => {
    setAcceptModal(false);
    setTimeout(() => {
      toast.success("Document has been accepted successfully!");
    }, 100);
    setAcceptComment("");
  };


  const handleReject = () => {
    setRejectModal(false);
    setTimeout(() => {
      toast.error("Document has been rejected. Please review and resubmit.");
    }, 100);
    setRejectComment("");
    setRejectError(""); 
  };



  let icon1;
  let icon2;

  if (status === "pending") {
    icon1 = (
      <FaCheck
        className="bg-green-600 text-white rounded-full p-1 mb-1 w-5 h-5 cursor-pointer"
        onClick={() => setAcceptModal(true)}
      />
    );
    icon2 = (
      <RxCross2
        className="bg-red-500 text-white rounded-full p-1 w-5 h-5 cursor-pointer"
        onClick={() => setRejectModal(true)}
      />
    );
  } else if (status === "rejected") {
    icon1 = <PiEyeBold className="bg-[#006666] text-white rounded-full p-1 mb-1 w-5 h-5" />;
    icon2 = <RxCross2 className="bg-red-500 text-white rounded-full p-1 w-5 h-5" />;
  } else if (status === "success") {
    icon1 = <PiEyeBold className="bg-[#006666] text-white rounded-full p-1 mb-1 w-5 h-5" />;
    icon2 = <FaCheck className="bg-green-600 text-white rounded-full p-1 w-5 h-5" />;
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />

      <div className="flex justify-between rounded-xl shadow-sm bg-[#F8F7F7] overflow-hidden w-[230px] min-h-[70px] mb-4">
        <div
          onClick={() => {
            setCurrentPdf("/Sample.pdf");
            setShowPdf(true);
          }}
          className="bg-[#006666] text-white font-medium flex items-center justify-center rounded-l-xl w-[60px] cursor-pointer">
          {label}
        </div>

        <div className="flex flex-col justify-center pl-3 pr-2 flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate text-left" >{title}</h3>
          <p className="text-gray-500 text-[14px] truncate text-left">{subtitle}</p>
        </div>

        {showBorder && <div className="w-[2px] h-full bg-gray-300"></div>}

        <div className="flex flex-col justify-center gap-1 p-2">
          <div className="flex flex-col items-center">
            {icon1}
            {icon2}
          </div>
        </div>
      </div>


      {acceptModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white flex flex-col  w-full max-w-[500px] rounded-3xl border p-8  font-inter shadow-lg ">
            <div>
              <div className=" text-xl font-semibold text-gray-900 mb-4">Approve Document</div>
              <div className="font-thin text-gray-600 mb-4">Are you sure you want to approve this document? This action cannot be undone.</div>
              <div className="bg-gray-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-1"> Document:</p>
                <p className="font-medium text-gray-900"> Resume /CV</p>
              </div>
              <textarea
                className="w-full mb-4 border border-gray-300  p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006666] resize-none "
                rows={4}
                placeholder="Add any Additional comments..."
                value={acceptComment}
                onChange={(e) => setAcceptComment(e.target.value)}/>
              <div className="flex gap-3  justify-end">
                <button
                  className="border rounded-xl bg-white py-4 px-6 w-auto border-gray-300 hover:bg-gray-100"
                  onClick={() => setAcceptModal(false)}>
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white w-auto py-4 px-6 rounded-xl border border-gray-300 hover:bg-green-700"
                  onClick={handleAccept}>
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {rejectModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white flex flex-col  w-full max-w-[500px] rounded-3xl border p-8  font-inter shadow-lg ">
            <div>
              <div className=" text-xl font-semibold text-gray-900 mb-4">Reject Document</div>
              <div className="font-thin text-gray-600 mb-4">Are you sure you want to reject this document? This action cannot be undone.</div>
              <div className="bg-gray-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-1"> Document:</p>
                <p className="font-medium text-gray-900"> Resume /CV</p>
              </div>
              <textarea
                className={`w-full mb-4 border  ${rejectError ? "border-red-300" : "border-gray-200 "} font-thin p-3 text-gray-700 focus:outline-none  focus:ring-[#006666] `}
                rows={4}
                placeholder=" Please provide a reason for Rejection... "
                value={rejectComment}
                onChange={(e) => {
                  setRejectComment(e.target.value);
                  if (e.target.value.trim() !== "") {
                    setRejectError(""); 
                  }
                }}/>
              
              {rejectError && <p className="text-red-500 text-xs mb-2">{rejectError}</p>}

              <div className="flex gap-3  justify-end">
                <button
                  className="border rounded-xl bg-white py-4 px-6 w-auto border-gray-300 hover:bg-gray-100"
                  onClick={() => {
                    setRejectModal(false);
                    setRejectError(""); 
                  }} >
                  Cancel
                </button>
                <button
                  className="border rounded-xl bg-red-600 py-4 px-8 w-auto border-gray-300 text-white hover:bg-red-700"
                  onClick={() => {
                    if (rejectComment.trim() === "") {
                      setRejectError(" Comment is mandatory *");
                      return;
                    }
                   
                    handleReject();
                  }}>
                  Reject
                </button>
              </div>

            </div>
          </div>
        </div>

      )}

      {showPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-300 w-[60%] h-[85%] rounded-lg overflow-hidden relative  px-8">

            <button
              onClick={() => setShowPdf(false)}
              className="absolute top-2 right-2   flex  font-bold ">
              <RxCross2 size={25} className='font-bold' />
            </button>


            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer fileUrl={currentPdf} />
            </Worker>
          </div>
        </div>
      )}

    </>
  );
}


