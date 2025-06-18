import React from 'react'

const AddProduct = () => {
  return (
    <>
    <div className='flex justify-center'>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
        <legend className="fieldset-legend">Add Product</legend>

        <label className="label">Product Name:</label>
        <input type="text" className="input w-xl" />

        <label className="label">Product Description:</label>
        <input type="text" className="input w-xl" />

        <label className="label">Product Price:</label>
        <input type="text" className="input w-xl" />

        <label className="label">Product Image:</label>
        <input type="file" className="file-input file-input-ghost" />

          <button className="btn btn-neutral mt-4">Add Product</button>

      </fieldset>
      </div>
    </>
  )
}

export default AddProduct
