const express = require("express");
const authToken = require("../app/middleware/authToken");
const {
  userDetailsController,
  getUserDetails,
} = require("../app/controllers/userDetailsController");

const router = express.Router();

router.get("/details", authToken, userDetailsController);
router.get("/details/:userId", authToken, getUserDetails);

module.exports = router;
