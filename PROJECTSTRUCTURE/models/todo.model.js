import fs from "fs";

const dbPath = "./src/db.json";

const readDB = () => {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

export const getAllTodos = () => {
  const db = readDB();
  return db.todos;
};

export const getTodoById = (id) => {
  const db = readDB();
  return db.todos.find(todo => todo.id === id);
};

export const addTodo = (title) => {
  const db = readDB();
  const newTodo = {
    id: Date.now(),
    title
  };
  db.todos.push(newTodo);
  writeDB(db);
  return newTodo;
};

export const updateTodo = (id, title) => {
  const db = readDB();
  const index = db.todos.findIndex(todo => todo.id === id);

  if (index === -1) return null;

  db.todos[index].title = title;
  writeDB(db);
  return db.todos[index];
};

export const deleteTodo = (id) => {
  const db = readDB();
  const index = db.todos.findIndex(todo => todo.id === id);

  if (index === -1) return null;

  const deletedTodo = db.todos.splice(index, 1);
  writeDB(db);
  return deletedTodo[0];
};
