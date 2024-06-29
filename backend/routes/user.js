const express = require("express");
const authToken = require("../app/middleware/authToken");
const {
  userDetailsController,
} = require("../app/controllers/userDetailsController");

const router = express.Router();

router.get("/details", authToken, userDetailsController);

module.exports = router;
