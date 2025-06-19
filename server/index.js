const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db_connection");
const Categories = require("./models/categoriesModel");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.post(
  "/addcategory",
  upload.single("categoryImage"),
  async (request, response) => {
    try {
      const { categoryName, categoryDetail } = request.body;
      const categoryImage = request.file.filename;

      await Categories.insertOne({
        category_name: categoryName,
        category_detail: categoryDetail,
        category_image: categoryImage,
      });

      response.status(200).send({ popup: "Category Added" });
    } catch (err) {
      console.error(err);
      response.status(500).send({ popup: "Error Adding Category" });
    }
  }
);


app.listen(process.env.PORT || 2000, () => {
  console.log("Server Started");
});
