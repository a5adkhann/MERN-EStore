import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='footer-section bg-[#18181B] text-white grid md:grid-cols-4 grid-cols-1 p-10'>
        <div className='section-a'>
          <i class="ri-webhook-line text-red-600"></i>
          <span className='font-bold'>E-Store</span>
        </div>
        <div className='section-b'>
          <p>Home</p>
          <p>Categories</p>
          <p>Products</p>
        </div>
        <div className='section-c'>
          <p>Home</p>
          <p>Categories</p>
          <p>Products</p>
        </div>
        <div className='section-d'>
          <p>Home</p>
          <p>Categories</p>
          <p>Products</p>
        </div>
      </div>
    </>
  )
}

export default Footer
