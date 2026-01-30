const express = require("express");
const router = express.Router();
const { addTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller.js");

// Create Todo
router.post("/add-todo", addTodo);

// Get all todos for a user
router.get("/get-my-todo/:userId", getTodo);

// Update Todo
router.put("/update-todo/:todoId", updateTodo);

// Delete Todo
router.delete("/delete-todo/:todoId", deleteTodo);

module.exports = router;
