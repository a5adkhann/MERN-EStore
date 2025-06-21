import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductsSection = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:2000/getproducts");
            setProducts(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <>
        <p className='px-10 font-bold text-3xl mt-20'>Products</p>
            <div className="products-section grid md:grid-cols-3 grid-cols-1 gap-10 p-10">
                {products.map((product) => (
                    <div className="product border border-gray-300 shadow-lg" data-aos="fade-in">
                        <div className="product-img">
                            <img src={`http://localhost:2000/uploads/${product.product_image}`} alt="" />
                        </div>
                        <div className="product-detail p-3">
                            <p>{product.product_name}</p>
                            <p>{product.product_price}</p>
                            <button className='border border-gray-300 px-3 py-2'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductsSection
