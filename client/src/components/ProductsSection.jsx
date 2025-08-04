import React, { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [categoriesDropdown, setCategoriesDropdown] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    console.log("🛒 Cart updated:", cart);
  }, [cart]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:2000/product");
      setProducts(response.data);
    } catch (err) {
      console.log("Error fetching products:", err);
    }
  };

  const fetchCategoriesDropdown = async () => {
    try {
      const response = await axios.get("http://localhost:2000/category");
      setCategoriesDropdown(response.data);
    } catch (err) {
      console.log("Error fetching categories:", err);
    }
  };

  const handleCategoryFilter = async (categoryId) => {
    setSelectedCategoryId(categoryId);
    if (!categoryId) {
      fetchProducts();
      return;
    }

    try {
      const response = await axios.get(`http://localhost:2000/category/categorydetail/${categoryId}`);
      setProducts(response.data.product);
    } catch (err) {
      console.log("Error filtering by category:", err);
    }
  };

  const handleAddToCart = (product) => {
    console.log("Add to Cart Clicked:", product);

    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingIndex = updatedCart.findIndex((item) => item._id === product._id);

      if (existingIndex !== -1) {
        updatedCart[existingIndex].quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      console.log("✅ Updated Cart inside setCart:", updatedCart);

      toast.success(`${product.product_name} added to cart`);
      return updatedCart;
    });
  };


  useEffect(() => {
    fetchProducts();
    fetchCategoriesDropdown();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="px-10 mt-20 flex justify-between items-center">
        <p className="font-bold text-3xl">All Collection</p>
        <select
          className="select select-ghost w-[15%] focus:outline-0"
          onChange={(e) => handleCategoryFilter(e.target.value)}
        >
          <option value="">Filter Category</option>
          {categoriesDropdown?.map((category) => (
            <option key={category._id} value={category._id}>
              {category.category_name}
            </option>
          ))}
        </select>
      </div>

      <div className="products-section grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
        {products?.map((product) => (
          <div
            key={product._id}
            className="product border group border-gray-300 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            <div className="product-img relative">
              <img
                src={`http://localhost:2000/uploads/${product.product_image}`}
                alt={product.product_name}
                className="w-full h-64 object-cover"
              />
              <div className="view-btn absolute inset-0 flex items-end justify-center opacity-0 bottom-2 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                <button className="px-10 py-1 bg-gradient-to-br from-[#000000] to-[#060a49] text-white rounded-full">
                  <Link to={`/products/${product._id}`}>View Product</Link>
                </button>
              </div>
            </div>

            <div className="product-detail p-3">
              <div className="flex justify-between items-center">
                <div className="title-price">
                  <p className="font-semibold">{product.product_name}</p>
                  <p>
                    ${product.product_price}{" "}
                    <del className="text-red-600 text-xs">50% OFF</del>
                  </p>
                </div>
                <div className="cart-btn">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-3 py-2 hover:-translate-y-1 hover:text-red-600 transition-all cursor-pointer duration-300 ease-in-out"
                  >
                    <ShoppingBag />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
};

export default ProductsSection;
