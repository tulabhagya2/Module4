const express = require("express");
const router = express.Router();
const { addTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller.js");
const { validateAddTodo, validateTodoId,validateUserId } = require("../middlewares/todo.middleware.js");

// Create Todo
router.post("/add-todo",validateAddTodo, addTodo);

// Get all todos for a user
router.get("/get-my-todo/:userId",validateUserId, getTodo);

// Update Todo
router.put("/update-todo/:todoId",validateTodoId, updateTodo);

// Delete Todo
router.delete("/delete-todo/:todoId",validateTodoId, deleteTodo);

module.exports = router;
