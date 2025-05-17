import React from 'react'
import productsData from '../data/ProductsData'

const ProductsSection = () => {
  return (
    <>
        <div className="products-section grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
            {productsData.map((product) => (
            <div className="product border border-gray-300 shadow-lg">
                <div className="product-img">
                    <img src={product.image} alt="" />
                </div>
                <div className="product-detail p-3">
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <button className='border border-gray-300 px-3 py-2'>Add to Cart</button>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default ProductsSection
