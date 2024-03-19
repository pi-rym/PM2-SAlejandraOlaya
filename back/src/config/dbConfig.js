require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
    mongoose.connect("mongodb+srv://silviaolaya:beC49rDABpda6itX@cluster0.szszhx7.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0");
console.log(process.env.MONGO_URI);
}; 

module.exports = dbCon;