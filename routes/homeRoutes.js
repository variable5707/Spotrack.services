const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.post(
  "/addEnquiryRequest",
  homeController.addEnquiryRequest
);

module.exports = router;
