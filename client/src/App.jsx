import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import DashboardLayout from './dashboard/DashboardLayout'
import AddProduct from './dashboard/pages/AddProduct'
import ShowProducts from './dashboard/pages/ShowProducts'
import AddCategory from './dashboard/pages/AddCategory'
import ShowCategories from './dashboard/pages/ShowCategories'
import DashboardHome from './dashboard/pages/DashboardHome'
import AppLayout from './AppLayout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
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
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
