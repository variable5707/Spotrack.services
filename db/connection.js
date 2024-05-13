// A connection is established with the database through the Sequelize ORM using the creds from the config file.
const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");

const sequelize = new Sequelize(
  process.env.DB_NAME ,
  process.env.DB_USER ,
  process.env.DB_PASS ,
  {
    host:  process.env.DB_SERVER,
    dialect: "mssql",
    "dialectOptions": {
    options: {
      encrypt: true,
      requestTimeout: 300000, //300sec
    },
  }
  }
);
sequelize.sync();
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully."); // This message is logged while starting the server if the database connection is successful
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
module.exports = sequelize;
