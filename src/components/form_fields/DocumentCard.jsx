import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { PiEyeBold } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DocumentCard({ label, title, subtitle, status, showBorder = true }) {
  const [acceptModal, setAcceptModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);

  const [acceptComment, setAcceptComment] = useState("");
  const [rejectComment, setRejectComment] = useState("");


  const handleAccept = () => {
    setAcceptModal(false);
    toast.success("Document has been accepted successfully!");
    setAcceptComment("");
  };


  const handleReject = () => {
    if (!rejectComment.trim()) {
      setRejectModal(false)
      toast.error("Document is required.");
      return;
    }
    setRejectModal(false);
    toast.error("Document has been rejected!");
    setRejectComment("");
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
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="flex justify-between rounded-xl shadow-sm bg-[#F8F7F7] overflow-hidden w-[230px] min-h-[70px] mb-4">
        <div className="bg-[#006666] text-white font-medium flex items-center justify-center rounded-l-xl w-[60px] cursor-pointer">
          {label}
        </div>

        <div className="flex flex-col justify-center pl-3 pr-2 flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate text-left">{title}</h3>
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
          <div className="bg-white flex flex-col w-[400px] rounded-lg border p-6 font-inter shadow-lg">
            <div>
              <div className="mb-2 text-[18px] font-medium">Accept Document</div>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#006666] resize-none mb-4"
                rows={4}
                placeholder="Add optional comment"
                value={acceptComment}
                onChange={(e) => setAcceptComment(e.target.value)}
              />
              <div className="flex gap-3 mt-4">
                <button
                  className="border rounded-md w-1/2 bg-white p-2 border-gray-300"
                  onClick={() => setAcceptModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#16A34A] text-white w-1/2 rounded-md border border-gray-300"
                  onClick={handleAccept}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {rejectModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white flex flex-col w-[400px] rounded-lg border p-6 font-inter shadow-lg">
            <div>
              <div className="mb-2 text-[18px] font-medium">Reject Document</div>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none mb-2"
                rows={4}
                placeholder="Comment is required for rejection"
                value={rejectComment}
                onChange={(e) => setRejectComment(e.target.value)}
              />
              <p className="text-red-500 text-xs mb-2">* Comment is mandatory</p>
              <div className="flex gap-3 mt-4">
                <button
                  className="border rounded-md w-1/2 bg-white p-2 border-gray-300"
                  onClick={() => setRejectModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-600 text-white w-1/2 rounded-md border border-gray-300"
                  onClick={handleReject}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


