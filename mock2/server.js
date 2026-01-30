

const express = require("express");
const  customersRoute  = require('./src/routes/customer.routes.js')
const  ordersRoute  = require('./src/routes/orders.routes.js')
require("dotenv").config();

const checkDatabaseConnnection = require('./src/utils/dbHealthCheck.js');

// ✅ FIXED PATH

const app = express();
app.use(express.json());
app.use('/customers',customersRoute)

app.use('/orders',ordersRoute)

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
