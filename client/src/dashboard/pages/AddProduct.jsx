import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const AddProduct = () => {

  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);


  const handleProductAddition = async (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDetail', productDetail);
    formData.append('productPrice', productPrice);
    formData.append('productImage', productImage);
    try {
      const response = await axios.post("http://localhost:2000/addproduct", formData
      );
      toast.success(response.data.popup);
      setProductName("");
      setProductDetail("");
      setProductPrice("");
      setProductImage("");
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <>
      <div className='flex justify-center'>
        <form onSubmit={handleProductAddition}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
            <legend className="fieldset-legend">Add Product</legend>

            <label className="label">Product Name:</label>
            <input type="text" className="input w-xl" value={productName} onChange={(e) => setProductName(e.target.value)}/>

            <label className="label">Product Detail:</label>
            <input type="text" className="input w-xl" value={productDetail} onChange={(e) => setProductDetail(e.target.value)} />

            <label className="label">Product Price:</label>
            <input type="text" className="input w-xl" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>

            <label className="label">Product Image:</label>
            <input type="file" className="file-input file-input-ghost" onChange={(e) => setProductImage(e.target.files[0])} />

            <button className="btn btn-neutral mt-4">Add Product</button>

          </fieldset>
        </form>
      </div>

       <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}

export default AddProduct
