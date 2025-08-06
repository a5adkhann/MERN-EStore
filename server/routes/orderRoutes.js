const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.post("/", orderController.newOrder);

// router.get("/", productController.getOrders);

module.exports = router;
