import React, { useState } from "react";

export default function StatusTabs() {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = ["All", "On Hold", "Open", "Closed", "Inactive"];
    return (
        <>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden bg-white min-w-[368px] h-10">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2  font-medium transition-colors duration-200 ${activeTab === tab
                                ? "bg-[#D0D5DD] text-blacke"
                                : "bg-white text-gray-800 hover:bg-gray-100"
                            } ${index !== 0 ? "border-l border-gray-300" : ""}`}>
                        {tab}
                    </button>
                ))}
            </div>
        </>
    )
}



