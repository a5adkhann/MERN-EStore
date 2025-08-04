const express = require("express");
const feedbackController = require("../controllers/feedbackController");
const router = express.Router();

router.post("/", feedbackController.addFeedback);

router.get("/", feedbackController.getFeedback);

module.exports = router;