import React from 'react'
import InternshipTabs from "../../components/statusTabs/InternshipTabs";
import Button from '../../components/statusTabs/Button';
import { useNavigate } from "react-router-dom";

export default function InternshipRoles() {
    const navigate = useNavigate()
    return (
        <>
            <div className="text-black p-3 rounded-lg w-full h-auto my-5  mx-auto border border-gray-33">
                <div>
                    <InternshipTabs />
                </div>

                <form>
                    <div className="p-2 border border-gray-300 rounded-md mr-10">
                        <div className="flex flex-col text-sm text-[#696F8C] gap-[10px]  ">
                            <p>We are looking for a passionate Java Developer to design, develop and maintain enterprise-level applications. You will work alongside senior developers, participate in code reviews, and build scalable backend systems.</p>
                            <p>Java Developer (Intern / Entry-Level)  </p>
                            <p>Engineering / Development</p>
                            <p>3 to 6 months (extendable or PPO based on performance)</p>
                        </div>
                    </div>

                    <div className='p-5 mt-96'>
                        <Button
                            title1="Cancel"
                            title2="Next"
                            onClick1={() => navigate("/internship-criteria")}
                            onClick2={() => navigate("/internship-expectation")}
                             isSubmit={false} 
                        />
                    </div>

                </form>
            </div>

        </>
    )
}
