const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db_connection");
const path = require("path");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const authRoutes = require("./routes/authRoutes");

connectDB();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/auth", authRoutes);


app.listen(2000, () => {
  console.log("Server running on port 2000");
});
