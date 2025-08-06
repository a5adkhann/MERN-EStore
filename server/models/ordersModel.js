const mongoose = require("mongoose");

const ordersModel = new mongoose.Schema({
    product_name : String,
    product_description : String,
    product_price : Number,
    product_quantity : Number,
    total_amount : Number
}, { timestamps: true })

module.exports = mongoose.model("Order", ordersModel);