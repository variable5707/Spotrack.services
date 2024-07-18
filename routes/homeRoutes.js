const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const upload = require("../middleware/uploadMiddleware")
router.post(
  "/addEnquiryRequest",
  homeController.addEnquiryRequest
);
router.get(
  "/getEnquiryRequest",
  homeController.getEnquiryRequest
);
router.post(
  "/addCarrierInquiry",
  upload.single('resume'),
  homeController.addCarrierInquiry
);

module.exports = router;
