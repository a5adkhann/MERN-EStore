import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const ShowCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editCategoryDetail, setEditCategoryDetail] = useState("");
  const [editCategoryImage, setEditCategoryImage] = useState(null);

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

  const handleCategorySearch = async () => {
    if (!searchCategory.trim()) {
      fetchCategories();
      return;
    }
    try {
      const response = await axios.get(`http://localhost:2000/category/${searchCategory}`);
      setCategories(response.data.filteredcategory);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (category) => {
    setEditingCategoryId(category._id);
    setEditCategoryName(category.category_name);
    setEditCategoryDetail(category.category_detail);
    setEditCategoryImage(category.category_image);
  };

  const saveEdit = async (id) => {
    try {
      const formData = new FormData();
      formData.append("editCategoryName", editCategoryName);
      formData.append("editCategoryDetail", editCategoryDetail);
      if (editCategoryImage instanceof File) {
        formData.append("editCategoryImage", editCategoryImage);
      }

      const response = await axios.put(
        `http://localhost:2000/category/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.message);
      setEditingCategoryId(null);
      setEditCategoryName("");
      setEditCategoryDetail("");
      setEditCategoryImage(null);
      fetchCategories();
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };

  const handleDelete = async(id) => {
    try {
      const response = await axios.delete(`http://localhost:2000/category/${id}`);
      toast.success(response.data.message, {
        iconTheme: {
          primary: "red"
        }
      });
      console.log(response.data.message);
      fetchCategories();
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <>
      <div>
        <div className="flex justify-between mb-3 items-center">
          <p className="text-2xl font-bold mb-3">Categories</p>
          <input
            type="text"
            className="border border-gray-300 w-[30%] p-1 focus:outline-none focus:border-blue-600 px-3"
            placeholder="search category..."
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            onKeyUp={handleCategorySearch}
          />
        </div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
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
                <tr key={category._id}>
                  <th>{index + 1}</th>
                  <td>
                    {editingCategoryId === category._id ? (
                      <input
                        type="text"
                        className="border border-gray-300 p-3 focus:outline-none focus:border-blue-600"
                        value={editCategoryName}
                        onChange={(e) => setEditCategoryName(e.target.value)}
                      />
                    ) : (
                      category.category_name
                    )}
                  </td>
                  <td>
                    {editingCategoryId === category._id ? (
                      <input
                        type="text"
                        className="border border-gray-300 p-3 focus:outline-none focus:border-blue-600"
                        value={editCategoryDetail}
                        onChange={(e) => setEditCategoryDetail(e.target.value)}
                      />
                    ) : (
                      category.category_detail
                    )}
                  </td>
                  <td>
                    {editingCategoryId !== category._id ? (
                      <img
                        src={`http://localhost:2000/uploads/${category.category_image}`}
                        width={100}
                        alt="category"
                      />
                    ) : (
                      <input
                        type="file"
                        className="file-input file-input-ghost"
                        onChange={(e) => setEditCategoryImage(e.target.files[0])}
                      />
                    )}
                  </td>
                  <td>
                    {editingCategoryId === category._id ? (
                      <>
                        <button
                          className="btn btn-soft btn-accent btn-sm"
                          onClick={() => saveEdit(category._id)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-soft btn-warning btn-sm"
                          onClick={() => setEditingCategoryId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-soft btn-info btn-sm"
                          onClick={() => handleEdit(category)}
                        >
                          Edit
                        </button>
                        <button className="btn btn-soft btn-error btn-sm" onClick={() => handleDelete(category._id)}>
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ShowCategories;
