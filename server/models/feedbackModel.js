const mongoose = require("mongoose");

const feedbackModel = new mongoose.Schema({
    name : String,
    message : String,
})

module.exports = mongoose.model("feedback", feedbackModel);