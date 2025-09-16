import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InternshipTabs from "../../components/statusTabs/InternshipTabs";
import Button from "../../components/statusTabs/Button";
import TextEditor from "../../components/form_fields/TextEditor";
import successIcon from '../../assets/images/Success_img.png';

export default function InternshipExpectations() {
    const navigate = useNavigate();
    const [expectations, setExpectations] = useState("");
    const [error, setError] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleNext = (e) => {
        e.preventDefault();

        if (!expectations.trim()) {
            setError("Please fill in the expectations.");
            return;
        }

        setError("");
        setShowPopup(true);
        console.log("Internship Expectations Data:", expectations);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="text-black p-3 rounded-lg w-full h-auto my-5 mx-auto border border-gray-33">
                <InternshipTabs />

                <form>
                    {/* <div className="p-2 border border-gray-300 rounded-md ml-[21px] mr-[39px] flex flex-col gap-4 text-sm text-[#696F8C]"> */}
                    <TextEditor
                        value={expectations}
                        onChange={(text) => setExpectations(text)}
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    {/* </div> */}

                    <div className="p-5 mt-5">
                        <Button
                            title1="Back"
                            title2="Create Internship"
                            onClick1={() => navigate("/internship-table")}
                            onClick2={handleNext}
                            bg2="bg-teal-800 text-white"
                            isSubmit={false}
                        />
                    </div>
                </form>
            </div>


            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl shadow-lg w-[436px] h-[220px] flex flex-col justify-center items-center text-center px-[30px] py-[38px] relative">

                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                        >
                            &times;
                        </button>

                        <img src={successIcon} alt="Success" className="w-11 h-11 mb-4" />
                        <h2 className="text-lg font-bold leading-snug">
                            Your Job Post has been <br /> created Successfully
                        </h2>
                    </div>
                </div>
            )}
        </>
    );
}
