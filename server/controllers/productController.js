const Products = require("../models/productsModel");

const productController = {
    addProduct: async (request, response) => {
        try {
            const { productName, productDetail, productPrice, productCategory } = request.body;
            const productImage = request.file ? request.file.filename : null;

            await Products.insertOne({
                product_name: productName,
                product_detail: productDetail,
                product_price: productPrice,
                product_image: productImage,
                product_category: productCategory
            });

            response.status(200).send({ popup: "Product Added" });
        } catch (err) {
            response.status(500).send({ popup: "Error Adding Product" });
        }
    }
    ,
    getProducts: async (request, response) => {
        try {
            const products = await Products.find();
            response.status(200).send(products);
        }
        catch (err) {
            console.log(err);
        }
    }
    ,
    updateProduct: async (request, response) => {
        const id = request.params.id;
        const { editProductName, editProductDetail, editProductPrice } = request.body;
        const editProductImage = request.file ? request.file.filename : null;

        try {
            const updateData = {
                product_name: editProductName,
                product_detail: editProductDetail,
                product_price: editProductPrice,
            };

            if (editProductImage) {
                updateData.product_image = editProductImage;
            }

            const result = await Products.updateOne({ _id: id }, updateData);
            response.status(200).send({ message: "Product updated successfully" });
        } catch (err) {
            console.error(err);
            response.status(500).send({ message: "Failed to update product" });
        }
    }
    ,
    searchProduct: async (request, response) => {
        const searchProduct = request.params.value;
        try {
            const result = await Products.find({
                product_name: { $regex: searchProduct, $options: "i" }
            });
            response.status(200).send({ filteredproduct: result });
        }
        catch (err) {
            console.log(err);
        }
    }
    ,
    deleteProduct: async (request, response) => {
        const id = request.params.id;
        try {
            await Products.deleteOne({ _id: id });
            response.status(200).send({ message: "Product deleted successfully" });
        }
        catch (err) {
            console.log(err);
        }
    }
    ,
    productDetail: async (request, response) => {
        const id = request.params.id;
        try {
            const resultProducts = await Products.find({ _id: id });
            response.status(200).send({ product: resultProducts });
        }
        catch (err) {
            console.log(err);
        }
    }

    ,


}

module.exports = productController;