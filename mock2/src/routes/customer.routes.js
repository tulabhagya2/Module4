const express=require("express");
const router = express.Router();
const {
  registerUser,
  getUsers, getSingleUser,
  updateUser,deleteUser
} = require("../controllers/customer.controller");

router.post("/", registerUser);
router.get("/", getUsers);
router.get("/:userId", getSingleUser);
router.put("/:userId",updateUser);
router.delete("/:userId",deleteUser);

module.exports = router;

