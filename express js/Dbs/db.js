const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/mers_admin";

const connectDB = async () => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

module.exports = connectDB;
