
getDocStamp = ()=>{

    let today = new Date();

var currentOffset = today.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ISTTime = new Date(today.getTime() + (ISTOffset + currentOffset)*60000);

    let dateTime =
      ISTTime.getFullYear() +
      "-" +
      String(ISTTime.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(ISTTime.getDate()).padStart(2, "0") +
      "T" +
      String(ISTTime.getHours()).padStart(2, "0") +
      "-" +
      String(ISTTime.getMinutes()).padStart(2, "0") +
      "-" +
      String(ISTTime.getSeconds()).padStart(2, "0");

      return dateTime
}

module.exports = getDocStamp;

