import React, { useState, useEffect } from 'react'
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import CategoryDetail from './pages/CategoryDetail'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:categoryId" element={<CategoryDetail />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="products" element={<ShowProducts />} />
              <Route path="addcategory" element={<AddCategory />} />
              <Route path="categories" element={<ShowCategories />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
