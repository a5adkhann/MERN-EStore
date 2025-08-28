import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = ({sidebarOpen, setSidebarOpen, logoutUser}) => {
    return (
        <>
            <header className="bg-slate-900 shadow-md p-4 flex text-white justify-between items-center">
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    ☰
                </button>
                <Link to="/dashboard">
                <div className="text-lg font-semibold">Main</div>
                </Link>
                
                <nav className="space-x-4 hidden md:block">
                    <Link to="/dashboard" className=" text-white hover:text-blue-600">Dashboard</Link>
                    <Link to="#" className="text-white hover:text-blue-600" onClick={logoutUser}>Logout</Link>
                </nav>
            </header>
        </>
    )
}

export default TopNavbar
