// App.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import {Outlet} from 'react-router-dom'

const DashboardLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64">

        <TopNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        {/* Page Content */}
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout