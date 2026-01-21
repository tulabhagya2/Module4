import fs from "fs";
import express from "express";
const orderRoutes=express.Router();


orderRouter.get("/orders",(req,res)=>{
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=json.parse(rawData);
    let orders=parsedData.orders;
    res.status(200).json({message:"orders get successfully",data:orders});
})



orderRouter.delete("/orders/:orderId",(req,res)=>{
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=json.parse(rawData);
    let orders=parsedData.orders;
    let index=orders.length?orders[orders.length-1].id+1:1;
    if(index===-1){
        return res.json({message:"ordersnot found"});
    }
    let deletedOrder=orders.find(order=>order.id===order.id);
    fs.writeFileSync("./db.json",JSON.stringify(parsedData,null,2));
    res.status(200).json({message:"order deleted successfully",
        data:deletedOrder[0]
    })

})
orderRouter.post("/orders",(req,res)=>{
    let rawData=fs.readFileSync("./db.json","utf-8");
    let parsedData=JSON.parse(rawData);
    let orders=parsedData.orders;
    let orderId=orders[orders.length-1].id+1;
    let newOrder={
        id:orderId,
        productId: 1,
  quantity: 3,
  totalAmount: 60000,
  status: "placed",
  createdAt: "2026-01-18"

    }
    orders.push(newOrder);
    res.status(200).json({message:"order added successfully",data:orders})
})

export default orderRoutes;
    
    

