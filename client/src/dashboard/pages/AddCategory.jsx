import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDetail, setCategoryDetail] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  

  const handleCategoryAddition = async(e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('categoryName', categoryName);
    formData.append('categoryDetail', categoryDetail);
    formData.append('categoryImage', categoryImage);
    try {
      const response = await axios.post("http://localhost:2000/addcategory", formData
    );
      toast.success(response.data.popup);
      setCategoryName("");
      setCategoryDetail("");
      setCategoryImage("");
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
    <form onSubmit={handleCategoryAddition} encType='multipart/form-data'>
    <div className='flex justify-center'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
        <legend className="fieldset-legend">Add Category</legend>

        <label className="label">Category Name:</label>
        <input type="text" className="input w-xl" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />

        <label className="label">Category Detail:</label>
        <input type="text" className="input w-xl" value={categoryDetail} onChange={(e) => setCategoryDetail(e.target.value)}/>

        <label className="label">Category Image:</label>
        <input type="file" className="file-input file-input-ghost" onChange={(e) => setCategoryImage(e.target.files[0])}/>

          <button className="btn btn-neutral mt-4">Add Category</button>

      </fieldset>
      </div>
      </form>

      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}

export default AddCategory
