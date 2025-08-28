import React, { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
import Cart from './pages/Cart'

const App = () => {
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("logged")) || "");

  useEffect(() => {
    AOS.init();
  }, []);

  const loginUser = (data) => {
    localStorage.setItem("logged", JSON.stringify(data));
    setLoggedUser(data);
  }

  const logoutUser = () => {
    localStorage.removeItem("logged");
    setLoggedUser("");
  }

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:categoryId" element={<CategoryDetail />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route path="/dashboard" element={ loggedUser ?  <DashboardLayout logoutUser={logoutUser} />  : <Navigate to="/login"/>}>
              <Route index element={<DashboardHome />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="products" element={<ShowProducts />} />
              <Route path="addcategory" element={<AddCategory />} />
              <Route path="categories" element={<ShowCategories />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login loginUser={loginUser}/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
