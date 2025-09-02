import React from 'react';
import InternshipExpectations from './InternshipExpectations';
import successIcon from '../../assets/images/success_img.png';

export default function InternshipExpectations_2() {
    return (
        <div className="relative">

            <div>
                <InternshipExpectations />
            </div>

            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-xl shadow-lg w-[436px] h-[220px] flex flex-col justify-center items-center text-center px-[30px] py-[38px]">
                    <img src={successIcon} alt="Success" className="w-11 h-11 mb-4" />
                    <h2 className="text-lg font-bold leading-snug">
                        Your Job Post has been <br /> created Successfully
                    </h2>
                </div>
            </div>
        </div>
    );
}
