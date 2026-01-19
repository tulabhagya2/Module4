import express from "express";
import fs from "fs";



const userRoutes=express.Router();

userRoutes.get("/",(req,res)=>{
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let users=parsedData.users;
    res.json({message:"users",data:users});
}
)
userRoutes.get("/:userId",(req,res)=>{
    let id = Number(req.params.userId);

    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    
    let user=parsedData.users.find(user=>user.id===id);
    if(!user){
        return res.status(404).json({message:"user not found",data:user})
    }
    res.json({message:"user getting successfully",data:user})
})
userRoutes.post("/add",(req,res)=>{

    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let users=parsedData.users;
    const userId = users.length ? users[users.length - 1].id + 1 : 1;

    let newUser={id:userId,name:req.body.name,course:req.body.course,year:req.body.year};
    users.push(newUser);
    fs.writeFileSync("./db.json",JSON.stringify(parsedData,null,2))

    res.json({message:"users addded Successfully",data:users});

})

userRoutes.put("/update/:userId",(req,res)=>{
    let id=Number(req.params.userId)
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let users=parsedData.users;
    let index=users.findIndex(user=>user.id===id);
    if(index==-1){
        return res.status(404).json({message:"user not found"})
    }

    users[index]={
        ...users[index],
        name:req.body.name??users[index].name,
        course:req.body.course??users[index].course,
        year:req.body.year??users[index].year

    }
    fs.writeFileSync("./db.json",JSON.stringify(parsedData,null,2));

    res.json({message:"users updated successfully",
        data:users[index]
    })
})

userRoutes.delete("/delete/:userId",(req,res)=>{
    let id=Number(req.params.userId)
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let users=parsedData.users;
    let index=users.findIndex(user=>user.id===id);
    if(index===-1){
        return res.status(404).send({message:"not found"});
    }
    let deletedTodo=users.splice(index,1);
    fs.writeFileSync("./db.json",JSON.stringify(parsedData,null,2));
    res.json({message:"user deleted successfully",data:deletedTodo[0]})
})



export default userRoutes;
