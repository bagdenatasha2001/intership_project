import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/statusTabs/Button";
import InternshipTabs from "../../components/statusTabs/InternshipTabs";
import TextEditor from "../../components/form_fields/TextEditor";

export default function InternshipRoles() {
    const navigate = useNavigate();
    const [roleDescription, setRoleDescription] = useState("");
    const [error, setError] = useState("");

    const handleNext = (e) => {
        e.preventDefault();
        if (!roleDescription.trim()) {
            setError("Please fill in the role description.");
            return;
        }
        setError("");
        console.log("Role Description:", roleDescription);
        navigate("/internship-expectation");
    };

    return (



        <div className="px-5 py-4 rounded-lg w-full h-auto   my-3 mx-auto border shadow-md border-gray-300 ">
            <div>
                <InternshipTabs />
            </div>

            <form>
                <TextEditor
                    value={roleDescription}
                    onChange={(text) => setRoleDescription(text)} />

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}


                <div className=" p-5 mt-5">
                    <Button
                        title1="Back"
                        title2="Next"
                        onClick1={() => navigate("/internship-table")}
                        onClick2={handleNext}
                        bg2="bg-teal-800 text-white"
                        isSubmit={false}
                    />

                </div>
            </form>

        </div>
    );
}
