const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db_connection");
const Categories = require("./models/categoriesModel");
const Products = require("./models/productsModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

connectDB();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/addcategory", upload.single("categoryImage"), async (request, response) => {
  try {
    const { categoryName, categoryDetail } = request.body;
    const categoryImage = request.file ? request.file.filename : null;

    await Categories.insertOne({
      category_name: categoryName,
      category_detail: categoryDetail,
      category_image: categoryImage,
    });

    response.status(200).send({ popup: "Category Added" });
  } catch (err) {
    response.status(500).send({ popup: "Error Adding Category" });
  }
});

app.get("/getcategories", async(request, response) => {
  try {
    const categories = await Categories.find();
    response.status(200).send(categories);
  }
  catch(err){
    console.log(err);
  }
});

app.post("/addproduct", upload.single("productImage"), async (request, response) => {
  try {
    const { productName, productDetail, productPrice } = request.body;
    const productImage = request.file ? request.file.filename : null;

    await Products.insertOne({
      product_name: productName,
      product_detail: productDetail,
      product_price: productPrice,
      product_image: productImage,
    });

    response.status(200).send({ popup: "Product Added" });
  } catch (err) {
    response.status(500).send({ popup: "Error Adding Product" });
  }
});

app.listen(2000, () => {
  console.log("Server running on port 2000");
});
