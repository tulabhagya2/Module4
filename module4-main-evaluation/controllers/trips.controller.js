const addTrip=async(req,res)=>{
    try{

    const {id,
customer_id,
vehicle_id,

end_date,
location,

passengers,
tripCost}=req.body;
if(
!customer_id ||
!vehicle_id ||
!start_date ||
!end_date ||
!location ||
!distance_km ||
!passengers||
!tripCost
){
    return res.status(409).json({message:"All the fields required",status:false});

}
const {data,error}=await supabase.from ("trips").insert({
customer_id ,
vehicle_id, 
start_date,
end_date,
location,
distance_km,
passengers,
tripCost,
}).select("*").single();


if(error){
    return res.status(400).json({status:false,
        message:error.message
    })
}
res.status(200).json({status:true,
    message:"trip added successfully"
})
}catch(error){
    return res.status(500).json({status:false,message:"Internal server error"})
}
    }

    const getTrip=async(req,res)=>{
        try{
        const {tripId}=req.body;
        if(!tripId){
            return res.status(409).json({message:"tripid required"})
        }
        const {data:existing}=await supabase.from("trips").eq("id",tripId).select("*").single();
        if(!existing){
            return res.status(404).json({message:"trip not found"});
        }
        const {data,error}=await supabase.from("trips").select("*").single();
        if(error){
            return res.status(401).json({message:error.message});

        }
         res.status(200).json({message:"trip details getting successfully"});
    }catch(error){
         res.status(500).json({message:"Internal server error"});

    }


}

const updateTrip=async(req,res)=>{
        try{
        const {tripId}=req.body;
        if(!tripId){
            return res.status(409).json({message:"tripid required"})
        }
        const {data:existing}=await supabase.from("trips").eq("id",tripId).update({location,distance_km}).select("*").single();
        if(!existing){
            return res.status(404).json({message:"trip not found"});
        }
        const {data,error}=await supabase.from("trips").select("*").single();
        if(error){
            return res.status(401).json({message:error.message});

        }
         res.status(200).json({message:"trip details updated successfully"});
    }catch(error){
         res.status(500).json({message:"Internal server error"});

    }
}

const deleteTrip=async(req,res)=>{
        try{
        const {tripId}=req.body;
        if(!tripId){
            return res.status(409).json({message:"tripid required"})
        }
        const {data:existing}=await supabase.from("trips").eq("id",tripId).select("*").single();
        if(!existing){
            return res.status(404).json({message:"trip not found"});
        }
        const {data,error}=await supabase.from("trips").delete().select("*").single();
        if(error){
            return res.status(401).json({message:error.message});

        }
         res.status(200).json({message:"trip details deleted successfully"});
    }catch(error){
         res.status(500).json({message:"Internal server error"});

    }
}