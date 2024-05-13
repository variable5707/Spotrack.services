var connection = require("../db/connection");

exports.addEnquiryRequest = async (req, res, next) => {
  try {
    console.log("adding Enquiry");
    var responseObject = {};
    var responseCode = 200;
    var err = {};
    let { email, name, message } = req.body;

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
    let replacementArray = [name, email, message];
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

    let paramaters = `@name =?,@email =?,@message=?`;

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
