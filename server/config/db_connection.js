const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://asadkaptechsfc:aptechsfc@cluster0.9jzxinj.mongodb.net/mern-estore");
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;