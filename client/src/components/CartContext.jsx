import { createContext, useState } from "react";
import { Toaster, toast } from 'react-hot-toast'

export const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        let isInCart = false;
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item._id === product._id);

            if (existingProduct) {
                isInCart = true;
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        if (isInCart) {
            toast.success("Item quantity increased");
        } else {
            toast.success("Item added to cart");
        }
    };


    return (
        <cartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
            <Toaster
                position="top-center"
            />
        </cartContext.Provider>
    )
}

export default CartProvider;