var templateMail = require("./templateMail")
inquiryMail = (username,  mail, name , message, user_subject) => {
  
  var subject = "Spotrack - We got an inquiry from " + name;
  var mailTitle = "Spotrack Inquiry Response"
  var message = `Message :-${message} <br> Subject :- ${user_subject} <br>`
  return templateMail(username, subject, mailTitle,name, mail, message, []);
  
};
module.exports = inquiryMail;
