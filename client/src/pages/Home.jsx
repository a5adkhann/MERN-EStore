import React, { useEffect } from 'react'
import ProductsSection from '../components/ProductsSection'
import CategoriesSection from '../components/CategoriesSection'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import TestimonialsLogic from '../components/TestimonialsLogic'
import Loader from '../components/Loader'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>  
        <Loader/>
        <Hero />
        <CategoriesSection />
        <ProductsSection />
        <AboutSection />
        <TestimonialsLogic/>
    </>
  )
}

export default Home
