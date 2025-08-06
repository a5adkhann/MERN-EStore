const Orders = require("../models/ordersModel");

const ordersController = {
  newOrder: async (request, response) => {
    try {
      const { orders } = request.body;

      await Orders.insertMany(orders); 
      response.status(200).send({ message: "Orders Placed Successfully" });
    } catch (err) {
      console.error(err);
      response.status(500).send({ message: "Server Error" });
    }
  },
};

module.exports = ordersController;
