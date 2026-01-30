const supabase = require("../configs/supabase.config")

const createOrder=async(req, res)=>{
    console.log("🔥 CREATE ORDER API HIT 🔥");
    try{
    const { product_name,quantity,price,customer_id }=req.body
    if(!product_name || !quantity || !price || !customer_id){
        return res.status(401).json({status:false,
            message:"All the fields required"
        })
    }
    //customer exists or not
    const { data:customer, error:customererror} = await supabase.from("customers").select("id").eq("id",customer_id).single();
    if(customererror){
        return res.status(400).json({
            status:false,
            message:customererror.message
        })
    }
    if(!customer){
        res.status(404).json({
            status:false,
            message:"customer not found"
        })
    }
    const {data,error}=await supabase.from("orders").insert([{product_name,quantity,price,
        customer_id:customer_id

    }]).select().single();
    if(error){
        return res.status(400).json({
            message:error.message
        })
    }
    res.status(200).json({
        message:"orders added successfully",
        status:true,
        data
    })

}
catch(error){
    console.log("error",error)
    res.status(500).json({
        status:false,
        message:"Internall server error"
    })
}
}

const getOrders=async(req,res)=>{
    try{
    const { customer_id }=req.query;
    let query=supabase.from("orders").select('*');

    if(customer_id){
        query=query.eq("customer_id",customer_id);


    }
    const { data,error }=await query;
    if(error){
        return res.status(400).json({
            "message":error.message
        })
    }
    res.status(200).json({
        "message":"all the users getting successfully",
        status:true,
        data,
        count:Array.isArray(data) ? data.length:1
    })



}catch(error){
    res.status(500).json({
        message:"Interal server error",
        status:false
    })

}
}
const updateOrder=async(req,res)=>{
    try{
    const {orderId}=req.params;
    const { product_name,quantity,price } = req.body;
    if(!orderId){
        return res.status(401).json({
            status:false,
            message:"order id required"

        })
    }
    const {data:existingOrder}=await supabase.from("orders").select("id").eq("id",orderId).single();
    if(!existingOrder)
        return res.status(404).json({
            status:false,
            message:"order not found"

        })
        const {data,error}=await supabase.from("orders").update({
            product_name,
            quantity,
            price

        }).eq("id",orderId)
        .select().single();
        if(error){
            return res.status(500).json({
                status: false,
                message: error.message

        }
    )}
        res.status(200).json({
            status:true,
            message:"orders updated successfully",
            data
        })
    
}catch(error){
    res.status(500).json({
        message:"Internal server error",
        status:false
    })

}
}
const deleteOrder=async(req,res)=>{
    try{
    const {orderId}=req.params;
    if(!orderId){
        return res.status(401).json({
            message:"orderId required"
        })
    }
    const {data:existingOrder}=await supabase.from("orders").select("id").eq("id",orderId).single();
    if(!existingOrder){
        return res.status(401).json({
            message:"order not found",
            status:false
        })
    }
    const {data,error}=await supabase.from("orders").delete().eq("id",orderId).select().single();
    if(error){
        return res.status(401).json({message:error.message})
    }
    res.status(200).json({
        status:true,
        message:"order deleted successfully"
    })
}
catch(error){
    res.status(500).json({
            status: false,
            message: "Internal server error"

})}

}

module.exports={
    createOrder,getOrders,updateOrder,deleteOrder
}