const express=require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
  updateOrder,deleteOrder
} = require("../controllers/order.controller");

router.post("/",createOrder );
router.get("/",getOrders );
router.put("/:orderId",updateOrder );

router.delete("/:orderId",deleteOrder );


module.exports = router;

