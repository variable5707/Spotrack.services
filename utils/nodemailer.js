const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });
exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});


