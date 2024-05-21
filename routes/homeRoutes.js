const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const upload = require("../middleware/uploadMiddleware")
router.post(
  "/addEnquiryRequest",
  homeController.addEnquiryRequest
);
router.post(
  "/addCarrierInquiry",
  upload.single('file'),
  homeController.addCarrierInquiry
);

module.exports = router;
