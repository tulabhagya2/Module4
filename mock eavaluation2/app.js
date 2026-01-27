import express from "express";
const port=3000;
const app=express();
app.use(express.json());
app.use(orderRouter);
app.listen(port,()=>{
    console.log("server started")
})