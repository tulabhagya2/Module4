const express=require("express");
const router= express.Router();
const {
    userRegister,getUsers,updateUser,
    deleteUser
}=require("../controllers/user.controller.js");
const {
    validateUseRegister,validateUserId
}=require("../middlewares/user.middleware.js");


router.post("/",validateUseRegister,userRegister);
router.get("/",getUsers);
router.put("/:userId",validateUserId,updateUser);
router.delete("/:userId",validateUserId,deleteUser);

module.exports=router;


