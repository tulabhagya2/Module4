import {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo
} from "../models/todo.model.js";

export const getTodos = (req, res) => {
  try {
    const todos = getAllTodos();
    res.status(200).json({ message: "Todos fetched", data: todos });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getSingleTodo = (req, res) => {
  try {
    const id = Number(req.params.todoId);
    const todo = getTodoById(id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ data: todo });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTodo = (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = addTodo(title);
    res.status(201).json({ message: "Todo created", data: newTodo });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTodoById = (req, res) => {
  try {
    const id = Number(req.params.todoId);
    const { title } = req.body;

    const updated = updateTodo(id, title);

    if (!updated) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo updated", data: updated });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTodoById = (req, res) => {
  try {
    const id = Number(req.params.todoId);
    const deleted = deleteTodo(id);

    if (!deleted) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted", data: deleted });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
