import express from "express";
import fs from "fs";
import rateLimiter from "../middleware/rateLimiter.middleware.js";
import validateTodo from "../middleware/validateTodo.middleware.js";




const todoRoutes=express.Router();

todoRoutes.get("/",rateLimiter,(req,res)=>{
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let todos=parsedData.todos;
    res.json({message:"Todos",data:todos});
}
)
todoRoutes.get("/:todoId",(req,res)=>{
    let id = Number(req.params.todoId);

    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    
    let todo=parsedData.todos.find(todo=>todo.id===id);
    if(!todo){
        return res.status(404).json({message:"todo not found",data:todo})
    }
    res.json({message:"Todo getting successfully",data:todo})
})
todoRoutes.post("/add",validateTodo,(req,res)=>{
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let todos=parsedData.todos;
    let todoId = todos.length ? todos[todos.length - 1].id + 1 : 1;

    let newTodo={id:todoId,name:req.body.name,status:req.body.status};
    todos.push(newTodo);
    fs.writeFileSync("./db.json",JSON.stringify(parsedData,null,2))

    res.json({message:"added Todo Successfully",data:todos});

})

todoRoutes.put("/update/:todoId",(req,res)=>{
    let id=Number(req.params.todoId)
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let todos=parsedData.todos;
    let index=todos.findIndex(todo=>todo.id===id);
    if(index==-1){
        return res.status(404).json({message:"Todo not found"})
    }

    todos[index]={
        ...todos[index],
        name:req.body.name??todos[index].name,
        status:req.body.status??todos[index].status
    }
    fs.writeFileSync("./db.json",JSON.stringify(parsedData,null,2));

    res.json({message:"todo updated successfully",
        data:todos[index]
    })
})

todoRoutes.delete("/delete/:todoId",(req,res)=>{
    let id=Number(req.params.todoId)
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let todos=parsedData.todos;
    let index=todos.findIndex(todo=>todo.id===id);
    if(index===-1){
        return res.status(404).send({message:"not found"});
    }
    let deletedTodo=todos.splice(index,1);
    fs.writeFileSync("./db.json",JSON.stringify(parsedData,null,2));
    res.json({message:"Todo deleted successfully",data:deletedTodo[0]})
})
export default todoRoutes;



