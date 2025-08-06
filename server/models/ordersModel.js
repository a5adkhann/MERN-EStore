const mongoose = require("mongoose");

const ordersModel = new mongoose.Schema({
    product_name : String,
    product_description : String,
    product_price : String,
    product_quantity : String,
    total_amount : String
})

module.exports = mongoose.model("Order", ordersModel);