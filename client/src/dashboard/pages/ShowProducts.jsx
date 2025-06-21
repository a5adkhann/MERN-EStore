import React, { useEffect, useState } from 'react'
import {SquarePen, Trash} from 'lucide-react'
import axios from 'axios';

const ShowProducts = () => {
   const [products, setProducts] = useState([]);

  const fetchProducts = async() => {
    try {
      const response = await axios.get("http://localhost:2000/getproducts");
      setProducts(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <>
    <div>
      <p className='text-2xl font-bold mb-3'>Products</p>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
            <tr>
              <th>{index+1}</th>
              <td>{product.product_name}</td>
              <td>{product.product_detail}</td>
              <td>{product.product_price}</td>
              <td>
                <img src={`http://localhost:2000/uploads/${product.product_image}`} width={70} />
                </td>
              <td className='flex gap-2 mt-6'>
                <button className="btn btn-soft btn-info btn-sm"><SquarePen /></button>
                <button className="btn btn-soft btn-error btn-sm"><Trash /></button>
              </td>
            </tr>
            ))}

          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

export default ShowProducts
