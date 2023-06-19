const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

// dotenv config
dotenv.config();

const URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
