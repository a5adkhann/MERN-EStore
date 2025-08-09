const Registeration = require('../models/RegisterationsModel');
const bcrypt = require("bcrypt");

const authController = {
    register: async (request, response) => {
        try {
            const { name, email, password } = request.body;
            const image = request.file.filename;

            const hashPassword = await bcrypt.hash(password, 10);

            await Registeration.insertOne({name, email, password: hashPassword, image});
            response.status(200).send({message: "Registered Successfully"});
        }
        catch (err) {
            console.log(err);
        }
    },
    login: async(request, response) => {
        try {
            const { email, password } = request.body;
            const registeredUser = await Registeration.findOne({email: email});
            if(registeredUser){
                const isMatch = await bcrypt.compare(registeredUser.password, password);
                if(isMatch){
                    response.status(200).send({message: "Logged in Successfully", registeredUser});
                }
                else {
                    response.status(200).send({message: "Incorrect Credentials"});
                }
            }
            else {
                response.status(200).send({message: "User don't exist"});
            }
        }
        catch(err){
            console.log(err);
        }
    }
} 

module.exports = authController;