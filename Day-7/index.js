import express from "express";
import todoRoutes from "./routes/todos.routes.js";
import loggerMiddleware from "./middleware/logger.middleware.js";
const app=express();
app.use(express.json());
const port=3000;

app.use("/todos",todoRoutes);
app.use(loggerMiddleware);
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})