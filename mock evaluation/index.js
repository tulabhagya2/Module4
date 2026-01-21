import express from "express";
import fs from "fs";
import orderRoutes from "./routes/orders.routes.js";

const app=express();
app.use(express.json);
const PORT=3000;
app.use(orderRoutes);


app.listen(PORT,()=>{
    console.log("server started");
})