import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);
  const [editProductName, setEditProductName] = useState("");
  const [editProductDetail, setEditProductDetail] = useState("");
  const [editProductPrice, setEditProductPrice] = useState("");
  const [editProductImage, setEditProductImage] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:2000/product");
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductSearch = async () => {
    if (!searchProduct.trim()) {
      fetchProducts();
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:2000/product/${searchProduct}`
      );
      console.log(response);
      setProducts(response.data.filteredproduct);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (product) => {
    setEditingProductId(product._id);
    setEditProductName(product.product_name);
    setEditProductDetail(product.product_detail);
    setEditProductPrice(product.product_price);
    setEditProductImage(product.product_image);
  };

  const saveEdit = async (id) => {
    try {
      const formData = new FormData();
      formData.append("editProductName", editProductName);
      formData.append("editProductDetail", editProductDetail);
      formData.append("editProductPrice", editProductPrice);
      formData.append("editProductImage", editProductImage);

      const response = await axios.put(
        `http://localhost:2000/product/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.message);
      console.log(response);

      setEditingProductId(null);
      setEditProductName("");
      setEditProductDetail("");
      setEditProductPrice("");
      setEditProductImage(null);
      fetchProducts();
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };


  const handleDelete = async(id) => {
    try {
      const response = await axios.delete(`http://localhost:2000/product/${id}`);
      toast.success(response.data.message, {
        iconTheme: {
          primary: "red"
        }
      });
      console.log(response.data.message);
      fetchProducts();
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <div>
        <div className="flex justify-between mb-3 items-center">
          <p className="text-2xl font-bold mb-3">Products</p>
          <input
            type="text"
            className="border border-gray-300 w-[30%] p-1 focus:outline-none focus:border-blue-600 px-3"
            placeholder="search product..."
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            onKeyUp={handleProductSearch}
          />
        </div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Product Detail</th>
                <th>Product Price</th>
                <th>Product Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    {editingProductId == product._id ? (
                      <input
                        type="text"
                        className="border border-gray-300 p-3 focus:outline-none focus:border-blue-600"
                        value={editProductName}
                        onChange={(e) => setEditProductName(e.target.value)}
                      />
                    ) : (
                      product.product_name
                    )}
                  </td>
                  <td>
                    {editingProductId == product._id ? (
                      <input
                        type="text"
                        className="border border-gray-300 p-3 focus:outline-none focus:border-blue-600"
                        value={editProductDetail}
                        onChange={(e) => setEditProductDetail(e.target.value)}
                      />
                    ) : (
                      product.product_detail
                    )}
                  </td>
                  <td>
                    {editingProductId == product._id ? (
                      <input
                        type="text"
                        className="border border-gray-300 p-3 focus:outline-none focus:border-blue-600"
                        value={editProductPrice}
                        onChange={(e) => setEditProductPrice(e.target.value)}
                      />
                    ) : (
                      product.product_price
                    )}
                  </td>
                  <td>
                    {editingProductId !== product._id ? (
                      <img
                        src={`http://localhost:2000/uploads/${product.product_image}`}
                        width={70}
                      />
                    ) : (
                      <input
                        type="file"
                        className="file-input file-input-ghost"
                        onChange={(e) => setEditProductImage(e.target.files[0])}
                      />
                    )}
                  </td>
                  <td>
                    {editingProductId == product._id ? (
                      <>
                        <button
                          className="btn btn-soft btn-accent btn-sm"
                          onClick={() => saveEdit(product._id)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-soft btn-warning btn-sm"
                          onClick={() => setEditingProductId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-soft btn-info btn-sm"
                          onClick={() => handleEdit(product)}
                        >
                          Edit
                        </button>
                        <button className="btn btn-soft btn-error btn-sm" onClick={() => handleDelete(product._id)}>
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

         <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
};

export default ShowProducts;
