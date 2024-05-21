const multer = require("multer");
const getDocStamp = require("../utils/getDocStamp")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/');
  },
  filename: function (req, file, cb) {

    if (
      // file.mimetype == "image/png" ||
      // file.mimetype == "image/jpg" ||
      // file.mimetype == "image/jpeg" ||
      file.mimetype == "application/pdf" ||
      file.mimetype ==
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.mimetype == "application/msword"
    ) {
      let dateTime = getDocStamp();
      let oname = file.originalname.split(".");
      oname = oname
        .slice(0, oname.length - 1)
        .join("_")
        .replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, "_");
      var name1 =
        file.fieldname +
        "_" +
        oname +
        "_" +
        dateTime +
        "." +
        file.originalname.split(".").pop();
    
    file.uploadName = name1 
    cb(null,file.uploadName);
    }
    else {
      cb(
        new Error("Only .doc, .docx and .pdf format allowed")
      );
    }
  }
});

const upload = multer({ storage: storage });
module.exports = upload;
