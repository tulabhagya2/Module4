import express from "express";
import todoRoutes from "./routes/todo.routes.js";
import { loggerMiddleware } from "./middleware/logger.middleware.js";

const app = express();
const PORT = 3000;

// JSON parser
app.use(express.json());

// App-level middleware
app.use(loggerMiddleware);

// Routes
app.use("/todos", todoRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
