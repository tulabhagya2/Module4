const express=require('express');
require("dotenv").config();
const checkDBConnection=require("./src/utils/dbHealthCheck");
const usersRoute=require("./src/routes/user.routes.js")
const todosRoute=require("./src/routes/todo.routes.js")

const app=express();
app.use(express.json());


app.use("/users",usersRoute);
app.use("/todos",todosRoute);
const PORT=process.env.PORT || 4567;
(async()=>{

const isConnected= await checkDBConnection();
if(!isConnected){
    console.log("server is not started due to db connection failure");
    process.exit(1);
}


app.listen(PORT,()=>{
    console.log(`server is listening on port number:${PORT}`)
})

})();