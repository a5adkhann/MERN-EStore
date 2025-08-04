import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  PlusCircle,
  ShoppingCart,
  FolderPlus,
  Folder
} from 'lucide-react';

const menuItems = [
  { label: 'Home Web', icon: <Home size={18} />, path: '/' },
  { label: 'Add Product', icon: <PlusCircle size={18} />, path: 'addproduct' },
  { label: 'Products', icon: <ShoppingCart size={18} />, path: 'products' },
  { label: 'Add Category', icon: <FolderPlus size={18} />, path: 'addcategory' },
  { label: 'Categories', icon: <Folder size={18} />, path: 'categories' },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside
      className={`bg-white text-black shadow-md w-64 h-full p-6 fixed inset-y-0 left-0 transform transition-transform duration-200 ease-in-out z-30
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="mb-8 text-center flex justify-center">
        <img className='invert' src="../logo.png" alt="" />
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map(({ label, icon, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition duration-150 ease-in-out ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-black'
                  }`
                }
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
