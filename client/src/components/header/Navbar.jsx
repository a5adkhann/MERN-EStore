import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='desktop-navbar bg-[#18181B] p-3 text-white flex justify-between items-center'>
            <div className='flex gap-2'>
              <i className="ri-webhook-line text-red-600"></i>
              <span className='font-bold'>E-Store</span>
            </div>
            <div>
              <ul className='flex gap-10'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <i class="ri-menu-line"></i>
            </div>
        </div>
    </>
  )
}

export default Navbar
