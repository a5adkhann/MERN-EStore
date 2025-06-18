import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  PlusCircle,
  ShoppingCart,
  FolderPlus,
  Folder
} from 'lucide-react';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <aside
        className={`bg-white text-black shadow-md w-64 p-4 fixed inset-y-0 left-0 transform transition-transform duration-200 ease-in-out z-30
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-red-600">
                <Home size={18} /> Home
              </Link>
            </li>
            <li>
              <Link to="addproduct" className="flex items-center gap-2 hover:text-red-600">
                <PlusCircle size={18} /> Add Product
              </Link>
            </li>
            <li>
              <Link to="products" className="flex items-center gap-2 hover:text-red-600">
                <ShoppingCart size={18} /> Products
              </Link>
            </li>
            <li>
              <Link to="addcategory" className="flex items-center gap-2 hover:text-red-600">
                <FolderPlus size={18} /> Add Categories
              </Link>
            </li>
            <li>
              <Link to="categories" className="flex items-center gap-2 hover:text-red-600">
                <Folder size={18} /> Categories
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
