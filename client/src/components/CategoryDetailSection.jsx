import axios from 'axios';
import { ShoppingBag } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const CategoryDetailSection = () => {

  const [thisCategoryProduct, setThisCategoryProduct] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  console.log(categoryName)
  const { categoryId } = useParams();

  const fetchCategoryDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/category/categorydetail/${categoryId}`);
      setThisCategoryProduct(response.data.product);
      setCategoryName(response.data.category);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
      fetchCategoryDetails();
  }, []);

  return (
    <>
      {categoryName.map((categoryN) => (
      <p className='px-10 font-bold text-3xl mt-20'>{categoryN.category_name}'s Products</p>
      ))}

      <div className="products-section grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
        {thisCategoryProduct.map((product) => (
          <Link to={`/products/${product._id}`}>
          <div className="product border border-gray-300 shadow-lg" data-aos="fade-in">
            <div className="product-img">
              <img src={`http://localhost:2000/uploads/${product.product_image}`} />
            </div>
            <div className="product-detail p-3">
              <div className='flex justify-between items-center'>
                <div className="title-price">
                  <p>{product.product_name}</p>
                  <p>{product.product_price}</p>
                </div>

                <div className="cart-btn">
                  <button className='px-3 py-2 hover:-translate-y-1 hover:text-red-600 transition-all cursor-pointer duration-300 ease-in-out'><ShoppingBag /></button>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default CategoryDetailSection
