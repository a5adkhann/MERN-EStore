import React, { useContext } from 'react'
import { cartContext } from '../components/CartContext'
import axios from 'axios'

const Cart = () => {
    const { cart } = useContext(cartContext);

    const handleOrderSubmission = async() => {
        try {
            const formData = new FormData();
            formData.append("product_name", cart.product_name);
            formData.append("product_price", cart.product_price);
            formData.append("product_description", cart.product_description);
            formData.append("quantity", cart.quantity);
            formData.append("total_amount", cart.product_price*cart.quantity);
            const response = await axios.post("http://localhost:2000/", formData);
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <div className='my-20'>
                {cart.map((item) => (
                    <div className='cart-item-section grid grid-cols-3 place-items-center w-[50%] my-10 shadow-lg mx-auto p-4 border border-gray-300'>
                        <div className="cart-item-img">
                            <img src={`http://localhost:2000/uploads/${item.product_image}`} width={100} alt="" />
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
                <div className='mx-auto w-[50%]'>
                    <button onClick={handleOrderSubmission} className='w-[100%] btn btn-active'>Place Order</button>
                </div>
            </div>


        </>
    )
}

export default Cart
