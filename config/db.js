const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`connect to Database ${mongoose.connection.host}`.bgGreen);
  } catch (error) {
    console.log("no error", error, colors.bgRed);
  }
};

module.exports = connectDb;
