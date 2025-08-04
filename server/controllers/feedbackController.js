const Feedback = require("../models/feedbackModel");

const feedbackController = {
  addFeedback: async (request, response) => {
    const { name, message } = request.body;
    try {
      await Feedback.insertOne({ name, message });
      response.status(200).send({ message: "Feedback Recorded" });
    }
    catch (err) {
      console.log(err);
    }
  },

  getFeedback: async (request, response) => {
    try {
      const result = await Feedback.find();
      response.status(200).send({ testimonials: result })
    }
    catch (err) {
      console.log(err);
    }
  }
}

module.exports = feedbackController;