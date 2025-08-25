import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Sideheader from '../components/sideheade/Sideheader';
import { Outlet } from 'react-router-dom';

export default function PrivateLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen font-['Inter']">
     
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black md:hidden" />
      )}
      <div
        className={`fixed md:static z-50 bg-[#D1DDDD] h-screen transition-all duration-300
        ${sidebarOpen ? 'w-64' : 'w-0'} md:w-[20%]`}>
        <Sideheader open={sidebarOpen} />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <div className="sticky top-0 z-50">
          <Header onToggleSidebar={() => setSidebarOpen(prev => !prev)} />
        </div>
        <div
          className="overflow-y-auto p-4 md:p-6 space-y-6"
          style={{ maxHeight: 'calc(100vh - 53px)' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
