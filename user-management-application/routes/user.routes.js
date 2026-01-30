const express = require("express");
const router = express.Router();

const { createUser, getUsers, getSingleUser, updateUser, deleteUser } = require("../controllers/user.controller");
const { validateUser } = require("../middlewares/validation.middleware");

// Create a new user
router.post("/", validateUser, createUser);

// Get all users
router.get("/", getUsers);

// Get a single user by ID
router.get("/:userId", getSingleUser);

// Update user by ID
router.put("/:userId", validateUser, updateUser);

// Delete user by ID
router.delete("/:userId", deleteUser);

// Export router directly (not an object)
module.exports = router;
