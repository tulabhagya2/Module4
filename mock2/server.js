const express = require("express");
require("dotenv").config();

const checkDatabaseConnnection = require('./src/utils/dbHealthCheck.js');

const app = express();
const PORT = process.env.PORT || 4568;

(async () => {
  const isDbConnected = await checkDatabaseConnnection();

  if (!isDbConnected) {
    console.log("Server not started due to DB connection failure");
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log(`Server is listening on the port number: ${PORT}`);
  });
})();
