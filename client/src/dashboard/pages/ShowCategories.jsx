import React, { useEffect, useState } from 'react'
import { SquarePen, Trash } from 'lucide-react'
import axios from 'axios'

const ShowCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async() => {
    try {
      const response = await axios.get("http://localhost:2000/getcategories");
      setCategories(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [])
  return (
    <>
      <div>
        <p className='text-2xl font-bold mb-3'>Categories</p>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Category Detail</th>
                <th>Category Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
              <tr>
                <th>{index+1}</th>
                <td>{category.category_name}</td>
                <td>{category.category_detail}</td>
                <td>
                  <img src={`http://localhost:2000/uploads/${category.category_image}`} width={100} />
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

export default ShowCategories
