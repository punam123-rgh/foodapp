const express = require("express");
const { registerController } = require("../controllers/authController");
const router = express.Router();

//register || post
router.post("/register", registerController);

module.exports = router;
