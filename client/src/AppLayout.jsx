import React from 'react'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <Navbar />
            <Outlet />
        <Footer />
    </>
  )
}

export default AppLayout
