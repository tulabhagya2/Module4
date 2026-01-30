const express=require("express");
const router= express.Router();
const {
    userRegister,getUsers,updateUser,
    deleteUser
}=require("../controllers/user.controller.js");

router.post("/",userRegister);
router.get("/",getUsers);
router.put("/:userId",updateUser);
router.delete("/:userId",deleteUser);

module.exports=router;


