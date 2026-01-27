import express from "express";
import {
  getTodos,
  getSingleTodo,
  createTodo,
  updateTodoById,
  deleteTodoById
} from "../controllers/todo.controller.js";

import { rateLimiter } from "../middleware/rateLimiter.middleware.js";
import { validateTodo } from "../middleware/validateTodo.middleware.js";

const router = express.Router();

router.get("/", rateLimiter, getTodos);
router.get("/:todoId", getSingleTodo);
router.post("/add", validateTodo, createTodo);
router.put("/update/:todoId", updateTodoById);
router.delete("/delete/:todoId", deleteTodoById);

export default router;
