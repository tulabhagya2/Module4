import express from "express";
import fs from "fs";
const port=5000;


const app=express();
app.use(express.json());
app.get("/todos",(req,res)=>{
    let rawData=fs.readFileSync("./db.json","utf-8");
    //fs always give the data in the form of string
    console.log("data in the form of string",rawData);
    let parsedData=JSON.parse(rawData);
    console.log("parseddata",parsedData);
    let todos=parsedData.todos;

    res.json({message:"Todos List",data:todos})

});

app.post("/add-todo",(req,res)=>{
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let todos=parsedData.todos;
    let todoId=todos[todos.length-1].id+1;
    let newTodo={id:todoId,name:req.body.name,course:req.body.course,year:req.body.year};
    todos.push(newTodo);
    let stringifiedData=JSON.stringify(parsedData);
    fs.writeFileSync("./db.json",stringifiedData)
    res.json({message:"todo added",data:todos});
})

app.put("/update-todo/:id", (req, res) => {
    let id = Number(req.params.id);

    let rawData = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(rawData);

    let todos = parsedData.todos;

    let index = todos.findIndex(todo => todo.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Todo not found" });
    }

    todos[index] = {
        ...todos[index],
        name: req.body.name ?? todos[index].name,
        course: req.body.course ?? todos[index].course,
        year: req.body.year ?? todos[index].year
    };

    fs.writeFileSync("./db.json", JSON.stringify(parsedData, null, 2));

    res.json({
        message: "Todo updated successfully",
        data: todos[index]
    });
});


app.delete("/deleteTodo/:id",(req,res)=>{
    let id=Number(req.params.id);
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let todos=parsedData.todos;
    let index=todos.findIndex(todo=>todo.id==id);
    if(index==-1){
        res.status(404).json("todos not found");
    }
    let deleteTodo=todos.splice(index,1);
    fs.writeFileSync("./db.json",JSON.stringify(parsedData,null,2));
    fs.json({
        message:"todo deleted successfully",
        data:deleteTodo[0]
    })


})



app.listen(port,()=>{
    console.log("server started");
})