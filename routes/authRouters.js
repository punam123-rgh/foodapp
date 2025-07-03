const express = require("express");
const {
  registerController,
  getdata,
} = require("../controllers/authController");
const router = express.Router();

//register || post
router.post("/register", registerController);
router.get("/data", getdata);

module.exports = router;
