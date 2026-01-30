const express=require('express');
require("dotenv").config();
const checkDBConnection=require("./src/utils/dbHealthCheck");
const usersRoute=require("./src/routes/user.routes.js")

const app=express();
app.use(express.json());
console.log("usersRoute =", usersRoute);
console.log("type of usersRoute =", typeof usersRoute);

app.use("/users",usersRoute);
const PORT=process.env.PORT || 4567;
(async()=>{

const isConnected= await checkDBConnection();
if(!isConnected){
    console.log("server is not started due to db connection failure");
}


app.listen(PORT,()=>{
    console.log(`server is listening on port number:${PORT}`)
})

})();