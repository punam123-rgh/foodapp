const express = require("express");
const { testController } = require("../controllers/testcontroller");

const router = express.Router();
router.get("/testRouter", testController);
module.exports = router;
