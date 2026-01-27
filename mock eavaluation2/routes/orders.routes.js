import express from "express";
const orderRouter=express.Router();

 orderRouter.get("/get-my-orders/:customerId",(req,res,next)=>{
try{
    const {data,error}= supabase.from("orders").select("*");
    if(error) throw error
    }catch(err)
    {
        res.json({message:"all orders get successfully",data})
    }

});

orderRouter.delete("/delete-order/:orderId",(req,res,next)=>{
try{
    const {data,error}= supabase.from("orders").select("*").delete();
    if(error) throw error
    }catch(err)
    {
        res.json({message:" order deleted successfully",data})
    }

});


export default orderRouter;