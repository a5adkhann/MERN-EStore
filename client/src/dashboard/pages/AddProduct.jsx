import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const AddProduct = () => {

  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const fileInputRef = useRef(null);
  const [productCategory, setProductCategory] = useState(null);
  const [categories, setCategories] = useState([]);


  const handleProductAddition = async (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDetail', productDetail);
    formData.append('productPrice', productPrice);
    formData.append('productImage', productImage);
    formData.append('productCategory', productCategory);
    try {
      const response = await axios.post("http://localhost:2000/product", formData
      );
      toast.success(response.data.popup);
      setProductName("");
      setProductDetail("");
      setProductPrice("");
      setProductImage(null);
      setProductCategory(null);

      if(fileInputRef.current){
        fileInputRef.current.value = null;
      }
    }
    catch (err) {
      console.log(err);
    }
  }

   const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:2000/category");
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  return (
    <>
      <div className='flex justify-center'>
        <form onSubmit={handleProductAddition}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
            <legend className="fieldset-legend">Add Product</legend>

            <label className="label">Product Name:</label>
            <input type="text" className="input w-xl" value={productName} onChange={(e) => setProductName(e.target.value)} required />

            <label className="label">Product Detail:</label>
            <input type="text" className="input w-xl" value={productDetail} onChange={(e) => setProductDetail(e.target.value)} required />

            <label className="label">Product Price:</label>
            <input type="text" className="input w-xl" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />

            <label className="label">Product Image:</label>
            <input type="file" ref={fileInputRef} className="file-input file-input-ghost" onChange={(e) => setProductImage(e.target.files[0])} required />

            <label className="label">Select Category:</label>
            <form className="filter">
              <input className="btn btn-square" type="reset" value="×" />

              {categories.map((category) => (
              <input className="btn" type="radio" name="frameworks" aria-label={category.category_name} value={category._id}
                    checked={productCategory === category._id}
                    onChange={(e) => setProductCategory(e.target.value)} />
              ))}
              
            </form>

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
