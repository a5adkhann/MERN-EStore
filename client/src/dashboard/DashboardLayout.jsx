// App.jsx
import React from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import {Outlet} from 'react-router-dom'

const DashboardLayout = () => {

  return (
    <div className="flex h-screen">
        <Sidebar />
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64">

        <TopNavbar />
        {/* Page Content */}
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout