import React from 'react'
import Slider from '../components/Slider'
import ProductsSection from '../components/ProductsSection'
import CategoriesSection from '../components/CategoriesSection'

const Home = () => {
  return (
    <>
        <Slider />
        <CategoriesSection />
        <ProductsSection />
    </>
  )
}

export default Home
