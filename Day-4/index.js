import express from "express"
const app=express();
const port=3000;
app.get("/home",(req,res)=>{
    res.send("This is Home Page");
})
app.get("/contactus",(req,res)=>{
    res.send("contact us at contact@contact.com");
})

app.get("/about",(req,res)=>{
    res.json("Welcome to the About Page");
})


app.listen(port,()=>{
    console.log("server started");
})