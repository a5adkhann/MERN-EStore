import { ShoppingCart, Menu } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { CgProductHunt } from "react-icons/cg";
import { RiDashboard3Line } from "react-icons/ri";
import { cartContext } from '../CartContext';

const Navbar = () => {

  const {cart} = useContext(cartContext);

  return (
    <>
        <div className='desktop-navbar bg-gradient-to-br from-[#000000] to-[#060a49] p-5 text-white flex justify-between items-center'>
            <div className='flex gap-2'>
              <i className="ri-webhook-line text-red-600"></i>
              <span className='font-bold'>
                <img src="./logo.png" className='w-[40px] invert-25'/>
              </span>
            </div>
            <div className='hidden md:block'>
              <ul className='flex gap-10'>
                <li className='group'><Link className='flex group-hover:text-red-300 group-hover:-translate-y-1 transition-all duration-300 ease-in-out items-center gap-2' to="/"><IoHomeOutline className='group-hover:text-white text-red-300 text-lg' /> Home </Link></li>
                <li className='group'><Link className='flex items-center group-hover:text-red-300 group-hover:-translate-y-1 transition-all duration-300 ease-in-out gap-2 text-sm' to="/categories"><MdCategory className='group-hover:text-white text-red-300 text-lg'/> Categories</Link></li>
                <li className='group'><Link className='flex items-center group-hover:text-red-300 group-hover:-translate-y-1 transition-all duration-300 ease-in-out gap-2 text-sm' to="/products"><CgProductHunt className='group-hover:text-white text-red-300 text-xl'/>Products</Link></li>
                <li className='group'><Link className='flex items-center group-hover:text-red-300 group-hover:-translate-y-1 transition-all duration-300 ease-in-out gap-2 text-sm' to="/dashboard"><RiDashboard3Line className='group-hover:text-white text-red-300 text-lg'/>Dashboard</Link></li>
              </ul>
            </div>
            <Link to="/cart" className='flex gap-2'>
              <ShoppingCart /> {cart.length}
              <Menu className='md:hidden block'/>
            </Link>
        </div>
    </>
  )
}

export default Navbar
