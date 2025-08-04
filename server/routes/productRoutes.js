const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();
const path = require("path");

const multer = require("multer");
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


router.post("/", upload.single("productImage"), productController.addProduct);

router.get("/", productController.getProducts);

router.get("/:value", productController.searchProduct)

router.put("/:id", upload.single("editProductImage"), productController.updateProduct);

router.delete("/:id", productController.deleteProduct)

router.get("/productdetail/:id", productController.productDetail)

module.exports = router;
