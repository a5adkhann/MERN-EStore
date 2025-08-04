const express = require("express");
const categoryController = require("../controllers/categoryController");
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

const router = express.Router();

router.post("/", upload.single("categoryImage"), categoryController.addCategory);

router.get("/", categoryController.getCategory);

router.get("/:value", categoryController.searchCategory)



router.put("/:id", upload.single("editCategoryImage"), categoryController.updateCategory);



router.delete("/:id", categoryController.deleteCategory)

router.get("/categorydetail/:id", categoryController.categoryDetail);

module.exports = router;