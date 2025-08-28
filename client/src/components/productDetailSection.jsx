import axios from "axios";
import { ShoppingBasket } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { cartContext } from "./CartContext";

const ProductDetailSection = () => {
  const [thisProduct, setThisProduct] = useState([]);
  const { productId } = useParams();
  const navigate = useNavigate();
  const {addToCart} = useContext(cartContext);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/product/productdetail/${productId}`
      );
      setThisProduct(response.data.product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <button onClick={handleGoBack} className="mb-4 underline px-20 mt-20 cursor-pointer">
        Go Back
      </button>
      <div className="product-detail grid md:grid-cols-2 grid-cols-1 pb-20 px-20 gap-10">
        {thisProduct.map((product) => (
          <>
            <div className="product-img">
              <img
                className="shadow-xl border border-slate-900"
                src={`http://localhost:2000/uploads/${product.product_image}`}
                width={600}
                alt={product.product_name}
              />
            </div>
            <div className="product-detail mt-20">
              <p className="text-3xl font-bold mb-4">{product.product_name}</p>
              <p>{product.product_detail}</p>
              <div className="flex gap-2 mt-3">
                <p className="text-xl">{product.product_price}</p>
                {product.product_status === "Available" ? (
                  <button className="mb-10 px-4 bg-accent/12 rounded-full text-accent">
                    <span>{product.product_status}</span>
                  </button>
                ) : (
                  <button className="mb-10 px-4 bg-error/12 rounded-full text-error">
                    <span>{product.product_status}</span>
                  </button>
                )}
              </div>
              <button onClick={() => addToCart(product)} className="flex text-white text-center w-[100%] gap-2 py-2 rounded-full items-center justify-center bg-gradient-to-br from-[#000000] to-[#060a49]">
                ADD TO CART <ShoppingBasket />
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ProductDetailSection;
