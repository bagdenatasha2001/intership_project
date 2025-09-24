import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sideheader from '../components/sideheader/Sideheader';
import { Outlet, useLocation } from 'react-router-dom';

export default function PrivateLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    let pageTitle = '';

    if (location.pathname.startsWith('/dashboard')) {
        pageTitle = 'Dashboard Overview';
    } else if (location.pathname.startsWith('/internship')) {
        pageTitle = 'Job Post Creation ';
    } else if (location.pathname.startsWith('/application')) {
        pageTitle = 'Applications Management';
    } else {
        pageTitle = 'Applications Management';
    }

    return (
        <div className="flex w-full h-screen font-['Inter'] overflow-hidden">
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-40 bg-black md:hidden" />
            )}
            <div
                className={`fixed md:static z-50 bg-[#D1DDDD] h-screen transition-all duration-300 overflow-x-hidden
                ${sidebarOpen ? 'w-[240px]' : 'w-0'} md:w-[240px]`}>
                <Sideheader open={sidebarOpen} />
            </div>
            <div className="flex flex-col flex-1 min-w-0 h-screen">
                <div className="sticky top-0 z-50">
                    <Header
                        onToggleSidebar={() => setSidebarOpen(prev => !prev)}
                        pageTitle={pageTitle}
                    />
                </div>
                <div className="flex-1 overflow-y-auto md:p-2 "
                    style={{ scrollbarWidth: "thin", scrollbarColor: "#006666 transparent" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
