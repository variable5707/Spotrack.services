var connection = require("../db/connection");
let mailer = require("../utils/nodemailer");
let inquiryMail = require("../utils/Mails/inquiryMail");
let resumeMail = require("../utils/Mails/resumeMail");


exports.getEnquiryRequest = async (req, res, next) => {
  try {
    console.log("Getting Enquiry");
    var responseObject = {};
    var responseCode = 200;


    var replacementArray =[]


    let paramaters = ``;

    var Query = " exec [dbo].[sp_get_all_inquiries]" + paramaters;
    let response = await connection.query(Query, {
      raw: true,
      replacements: replacementArray,
      type: connection.QueryTypes.SELECT,
      logging: console.log,
    });
    if (response.length > 0) {
      responseObject.result = response;
      responseObject.error = false;
      responseObject.status = "Success";


    } else {
      responseObject.result = {
        result: "Something Went Wrong. Please Try Again !!",
      };
      responseObject.error = true;
      responseObject.status = "Failure";
    }
  } catch (err) {
    console.log(err);
    responseObject.result = { result: "Something Went Wrong. Please Try Again !!", };
    responseObject.error = true;
    responseObject.status = "Failure";
    responseCode = 400;
  }

  res.status(responseCode).json(responseObject);
  
};
exports.addEnquiryRequest = async (req, res, next) => {
  try {
    console.log("adding Enquiry");
    let mailSendIds = [
      "info@suugam.com",
    // "ankkit9@suugam.com",
    // "mohit@suugam.com"
    ]
    var responseObject = {};
    var responseCode = 200;
    var err = {};
    let { email, name, message , subject} = req.body;

    const regExForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    // const regExForContact = /^\s*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (!regExForEmail.test(email)) {
      err.Email = "Invalid Email";
    }

    if (Object.keys(err).length > 0) {
      responseObject.result = err;
      responseObject.error = true;
      responseObject.status = "Failure";
      responseCode = 400;
      res.status(responseCode).json(responseObject);
      return;
    }
    let replacementArray = [name, email, message, subject];
    let ValueError = false
    replacementArray.map((val) => {
      if (val === undefined) {
        responseObject.result = { result: "Value Error ! incorrect Payload !" };
        responseObject.error = true;
        responseObject.status = "Failure";
        responseCode = 400;
        ValueError = true;
      }
    });

    if (ValueError) {
      res.status(responseCode).json(responseObject);
      return;
    }

    let paramaters = `@name =?,@email =?,@message=?,@subject=?`;

    var Query = " exec [dbo].[sp_insert_inquiry]" + paramaters;
    let response = await connection.query(Query, {
      raw: true,
      replacements: replacementArray,
      type: connection.QueryTypes.SELECT,
      logging: console.log,
    });
    if (response.length > 0) {
      responseObject.result = response[0];
      responseObject.error = false;
      responseObject.status = "Success";
      let mailSent = await mailer.transporter.sendMail(
        inquiryMail(mailSendIds,  email, name , message, subject)
      );

    } else {
      responseObject.result = {
        result: "Something Went Wrong. Please Try Again !!",
      };
      responseObject.error = true;
      responseObject.status = "Failure";
    }
  } catch (err) {
    console.log(err);
    responseObject.result = { result: "Something Went Wrong. Please Try Again !!", };
    responseObject.error = true;
    responseObject.status = "Failure";
    responseCode = 400;
  }

  res.status(responseCode).json(responseObject);
  
};
exports.addCarrierInquiry = async (req, res, next) => {
  try {
    console.log("adding REsume");
    let mailSendIds = [
      "info@suugam.com",
      // "hr@suugam.com"
      // "mohit@suugam.com"
    ]
    var responseObject = {};
    var responseCode = 200;
    var err = {};
    const file = req.file;
    let { name, email, contact } = req.body;

    if (!file) {
      responseObject.result = { result: "Something Went Wrong. Please Try Again !!", };
      responseObject.error = true;
      responseObject.status = "Failure";
      responseCode = 400;
      return res.status(responseCode).json(responseObject);
    }


    
    const regExForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
    const regExForContact = /^\s*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (!regExForEmail.test(email)) {
      err.Email = "Invalid Email";
    }
    if (!regExForContact.test(contact)) {
      err.contact = "Invalid Contact";
    }

    if (Object.keys(err).length > 0) {
      responseObject.result = err;
      responseObject.error = true;
      responseObject.status = "Failure";
      responseCode = 400;
      res.status(responseCode).json(responseObject);
      return;
    }
    let replacementArray = [name, email, contact, file?.uploadName];
    let ValueError = false
    replacementArray.map((val) => {
      if (val === undefined) {
        responseObject.result = { result: "Value Error ! incorrect Payload !" };
        responseObject.error = true;
        responseObject.status = "Failure";
        responseCode = 400;
        ValueError = true;
      }
    });

    if (ValueError) {
      res.status(responseCode).json(responseObject);
      return;
    }

    let paramaters = `@name =?,@email =?,@contact=?,@file_name=?`;

    var Query = " exec [dbo].[sp_carrier_request_insert]" + paramaters;
    let response = await connection.query(Query, {
      raw: true,
      replacements: replacementArray,
      type: connection.QueryTypes.SELECT,
      logging: console.log,
    });
    if (response.length > 0) {
      
      let attachments =  [
        {
          filename: file.uploadName,
          path: file.path
        }
      ]

  let mailSent = await mailer.transporter.sendMail(resumeMail(mailSendIds, name, email, contact, attachments), (error, info) => {
        if (error) {
          responseObject.result = { result: "Something Went Wrong. Please Try Again !!", };
          responseObject.error = true;
          responseObject.status = "Failure";
          responseCode = 400;
          res.status(responseCode).json(responseObject);
        }
      });

  

      response[0].fileStatus = "upoloaded"
      responseObject.result = response[0];
      responseObject.error = false;
      responseObject.status = "Success";

    } else {
      responseObject.result = {
        result: "Something Went Wrong. Please Try Again !!",
      };
      responseObject.error = true;
      responseObject.status = "Failure";
    }





  

  
  } catch (err) {
    console.log(err);
    responseObject.result = { result: "Something Went Wrong. Please Try Again !!", };
    responseObject.error = true;
    responseObject.status = "Failure";
    responseCode = 400;
  }

  res.status(responseCode).json(responseObject);
  
};
