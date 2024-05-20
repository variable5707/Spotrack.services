var templateMail = require("./templateMail")
inquiryMail = (username,  mail, name , message) => {
  
  var subject = "Spotrack - We got an inquiry";
  var mailTitle = "Spotrack Iquiry Response"
  return templateMail(username, subject, mailTitle,name, mail, message);
  
};
module.exports = inquiryMail;
