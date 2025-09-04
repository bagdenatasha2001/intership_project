import React from 'react'
import IntershipTabs from "../../components/statusTabs/IntershipTabs";
import Button from "../../components/statusTabs/Button";
import { useNavigate } from "react-router-dom";

export default function InternshipExpectations() {
    const navigate = useNavigate();


    return (
        <>
            <div className="text-black p-3 rounded-lg w-full h-auto my-5  mx-auto border border-gray-33">
                <div>
                    <IntershipTabs />
                </div>

                <form>
                    <div className="p-2 border border-gray-300 rounded-md mr-10">
                        <div className="flex flex-col text-sm text-black font-light gap-[10px]  ">
                            <p>Understand core Java concepts clearly and be hands-on with coding</p>
                            <p>Show initiative in learning new backend technologies (e.g., Spring Boot) </p>
                            <p>Be able to debug and problem-solve independently before asking for help</p>
                            <p>Ask relevant technical questions and participate in discussions</p>
                            <p>Meet task deadlines and maintain code quality</p>
                        </div>
                    </div>

                    <div className='p-5 mt-96'>
                        <Button
                            title1="Cancel"
                            title2="Next"
                            onClick1={() => navigate("/internship-role")}
                            onClick2={() => navigate("/internship-pop-up")}
                             isSubmit={false}  />
                    </div>
                </form>
            </div>

        </>
    )
}
