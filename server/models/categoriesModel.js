const mongoose = require("mongoose");

const categoriesModel = new mongoose.Schema({
    category_name : String,
    category_detail : String,
    category_image : File
})

module.exports = mongoose.model("Categorie", categoriesModel);