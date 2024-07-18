var templateMail = require("./templateMail")
resumeMail = (username,name, email, contact, attachment) => {
  
  var subject = "Spotrack - We got an inquiry from " 
  // + attachment[0].filename;
  var mailTitle = "Spotrack Inquiry Response"
var message = `User Contact :- ${contact} `
  return templateMail(username, subject, mailTitle,name, email, message, attachment);
};
module.exports = resumeMail;



