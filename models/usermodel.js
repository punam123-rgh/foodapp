const mongoose = require("mongoose");

const userShema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "user name is reuired"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
    usertype: {
      type: String,
      required: [true, "user type is required"],
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userShema);
