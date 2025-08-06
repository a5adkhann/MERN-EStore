const Orders = require("../models/ordersModel");

const ordersController = {
    newOrder: async(request, response) => {
        try {
            const {product_name, product_price, product_description, quantity} = request.body;

            await Orders.insertOne({product_name, product_price, product_description, product_quantity: quantity, total_amount});
            response.status(200).send({message: "Order Placed Successfully"});
        }
        catch(err){
            console.log(err);
        }
    }
}

module.exports = ordersController;