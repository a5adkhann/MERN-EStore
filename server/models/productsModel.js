const mongoose = require("mongoose");

const productsModel = new mongoose.Schema({
    product_name : String,
    product_detail : String,
    product_price : String,
    product_image : String
})

module.exports = mongoose.model("Product", productsModel);