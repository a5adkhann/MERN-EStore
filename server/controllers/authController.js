const Registeration = require('../models/RegisterationsModel');
const bcrypt = require("bcrypt");

const authController = {
    register: async (request, response) => {
        try {
            const { name, email, password } = request.body;
            const { image } = request.file.filename;

            const hashPassword = bcrypt.hash(password, 10);

            await Registeration.insertOne({name, email, password: hashPassword, image});
            response.status(200).send({message: "Registered Successfully"});
        }
        catch (err) {
            console.log(err);
        }
    }
} 

module.exports = authController;