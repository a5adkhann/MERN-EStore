const mongoose = require("mongoose");

const categoriesModel = new mongoose.Schema({
    category_name : String,
    category_detail : String,
    category_image : String
})

module.exports = mongoose.model("Categorie", categoriesModel);