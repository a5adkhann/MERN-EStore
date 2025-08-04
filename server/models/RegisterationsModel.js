const mongoose = require("mongoose");

const registerationsModel = new mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    image : String
})

module.exports = mongoose.model("Registeraion", registerationsModel);