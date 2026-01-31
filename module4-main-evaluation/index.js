const express=require("express");
require("dotenv").config();
const checkDBConnection=require("./utils/healthDBCheck.js")

const app=express();
app.use(express.json());
const PORT=process.env.PORT;



(async()=>{
    const isConnected=await checkDBConnection();
    if(isConnected){
        console.log("Database connected successfully");
        process.exit(1);
        

    }
    app.listen(PORT,()=>{
        console.log(`server is listening on the port number ${PORT}`);
    })

})();