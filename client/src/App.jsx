import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Products'
import DashboardLayout from './dashboard/DashboardLayout'
import AddProduct from './dashboard/pages/AddProduct'
import ShowProducts from './dashboard/pages/ShowProducts'
import AddCategory from './dashboard/pages/AddCategory'
import ShowCategories from './dashboard/pages/ShowCategories'
import DashboardHome from './dashboard/pages/DashboardHome'
import AppLayout from './AppLayout'
import Toaster from 'react-hot-toast'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route path="/products" element={<Products />}></Route>
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="products" element={<ShowProducts />} />
            <Route path="addcategory" element={<AddCategory />} />
            <Route path="categories" element={<ShowCategories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
