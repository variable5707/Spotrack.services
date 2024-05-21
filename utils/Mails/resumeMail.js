var templateMail = require("./templateMail")
resumeMail = (username, attachment) => {
  
  var subject = "Spotrack - We got an inquiry from " 
  // + attachment[0].filename;
  var mailTitle = "Spotrack Inquiry Response"

  return templateMail(username, subject, mailTitle,"", "", "", attachment);
  
};
module.exports = resumeMail;



