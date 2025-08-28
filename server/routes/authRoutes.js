const express = require("express");
const authController = require("../controllers/authController");
const path = require("path");

const router = express.Router();
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

router.post("/register", upload.single("image"), authController.register);
router.post("/login", upload.single("image"), authController.login);


module.exports = router;