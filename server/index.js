const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.listen(process.env.PORT || 2000, () => {
    console.log("Server Started");
})