const supabase=require("../configs/supabase.config.js")

const checkDBConnection=async()=>{
    try{
    const {data,error}=await supabase.from("users").select("*").limit(1);
    if(error) throw error
    console.log("Database connected successfully");
    return true
    }catch(error){
        console.log("Database connection failed",error.message)
        return false
    }
}
module.exports=checkDBConnection;