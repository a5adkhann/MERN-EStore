import React, { useContext, useEffect } from "react";
import { cartContext } from "../components/CartContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cart, setCart } = useContext(cartContext);
  const navigate = useNavigate();

  const handleOrderSubmission = async () => {
    try {
      const orders = cart.map((item) => ({
        product_name: item.product_name,
        product_price: item.product_price,
        product_description: item.product_description,
        product_quantity: item.quantity,
        total_amount: item.product_price * item.quantity,
      }));
      const response = await axios.post("http://localhost:2000/order", {orders});
      console.log(response);

      setCart([]);

      toast.success("Order placed successfully");
      navigate("/");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="my-20">
        {cart.map((item) => (
          <div className="cart-item-section grid grid-cols-3 place-items-center w-[50%] my-10 shadow-lg mx-auto p-4 border border-gray-300">
            <div className="cart-item-img">
              <img
                src={`http://localhost:2000/uploads/${item.product_image}`}
                width={100}
                alt=""
              />
            </div>
            <div className="cart-item-content">
              <p>{item.product_name}</p>
              <p>{item.product_price}</p>
              <p>{item.quantity}</p>
            </div>

            <div className="cart-item-action-btn">
              <button className="btn btn-soft btn-error">Remove</button>
            </div>
          </div>
        ))}
        <div className="mx-auto w-[50%]">
            {cart.length > 0 ? (
          <button
            onClick={handleOrderSubmission}
            className="w-[100%] btn btn-active"
          >
            Place Order
          </button>
          )
          :
          (
          <p className='text-center'>Nothing is added in the cart</p>
          )
          }
        </div>
      </div>
    </>
  );
};

export default Cart;
