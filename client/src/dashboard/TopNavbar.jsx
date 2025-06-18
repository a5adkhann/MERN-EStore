import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
    return (
        <>
            {/* Top Navbar */}
            <header className="bg-gradient-to-br from-[#0B1D51] to-[#F5F5F5] shadow-md p-4 flex text-white justify-between items-center">
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    ☰
                </button>
                <div className="text-lg font-semibold">My App</div>
                <nav className="space-x-4 hidden md:block">
                    <Link to="/dashboard" className=" text-white hover:text-blue-600">Dashboard</Link>
                    <Link to="#" className="text-white hover:text-blue-600">Notifications</Link>
                    <Link to="#" className="text-white hover:text-blue-600">Logout</Link>
                </nav>
            </header>
        </>
    )
}

export default TopNavbar
