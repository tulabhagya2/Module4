const supabase = require("../configs/supabase.config");


const registerUser=async(req,res)=>{
    try{
        const {name,email,phone}=req.body;

        //check if a user already exists with the given email
        const {data:existing}=await supabase.from("customers").select().eq("email",email).maybeSingle();
        if(existing){
            return res.status(409).json({status: false,
                error:`user with the email ${email} already exists`
            })
        }
        //Insert new user data into consumers table
        const {data,error}=await supabase.from('customers').insert([{
            name,email,phone
        }]).select();

       //Handle DATA BASE insertion error.
       if(error){
        
            return res.status(500).json({status: false,
                error:error.message
            })
        }
        //success response
        return res.status(201).json({status: true,
                message:'user created successfully',
                data
    })
}
    catch(error){

        res.status(500).json({
            status:false,
            error:error.message
        })
    }

       
    

};






const getUsers=async(req,res)=>{
    try{
        //extract userid from route params(may or may not exist) this is optional
        const { userId }=req.query;
        let query=  supabase.from("customers").select("*");
        //if userid exists fetch the single user.
        if(userId){
            query=query.eq("id",userId).maybeSingle();

        }
        //Execute query
        const { data,error }=await query;
        //Handle DB error
        if(error){
            return res.status(500).json({status:false,
                message:error.message
            })
        }
        //if userid was provided but no user found
        if(userId && !data){
            return res.status(404).json({
                status:false,
                message:"user not found"
            })
        }
        //success response
        return res.status(200).json({
                status:true,
                message:"user data fetched successfully ",
                count:Array.isArray(data) ? data.length:1,
                data

        })

    }catch(err){
        res.status(500).json({
            status:false,
            message:"Internal server error"
        })
    }
}

const getSingleUser=async(req,res)=>{
try{
    const { userId } = req.params;
    if(!userId){
       return res.status(400).json({
            message:"userId is required",
            status:false
        })
    }
    let query=supabase.from("customers").select("*").eq("id",userId).maybeSingle();
    const { data,error } = await query;
    if(error){
       return res.status(400).json(
            {status:false,
            message:error.message})
    }
    res.status(200).json({status:true,
        message:"single user fetched successfully",
         count: Array.isArray(data) ? data.length : 1,
         data
    })
    }catch(err){
      res.status(500).json({
        message:"Internal server error",
        status:false
      })  
    }
}
const updateUser=async(req,res)=>{
    try{
    const { userId }= req.params;
    const {name,email,phone}=req.body;
    if(!userId){
        return res.status(400).json({
            status:false,
            message:"userId required"

        })
    }
    // checking the user exists or not
    const {data:existingUser}=await supabase.from("customers").select("id").eq("id",userId).single();
    if(!existingUser){
        return res.status(400).json({
            status:false,
            message:"user not found"

        })
    }
    const { data,error }=await supabase.from("customers").update({name,email,phone

    }).eq("id",userId).select().single();
    if(error){
       return res.status(400).json({status:false,
            message:error.message
        })
    }
    res.status(200).json({
        status:true,
        message:"user data updated successfully"
    })

    
}catch(error){
    res.status(500).json({
        status:false,
        error:error.message
    })

}
}
const deleteUser=async(req,res)=>{
    try{
    const { userId }= req.params;
    
    if(!userId){
        return res.status(400).json({
            status:false,
            message:"userId required"

        })
    }
    // checking the user exists or not
    const {data:existingUser}=await supabase.from("customers").select("id").eq("id",userId).single();
    if(!existingUser){
        return res.status(400).json({
            status:false,
            message:"user not found"

        })
    }
    const { data,error }=await supabase.from("customers").delete(

    ).eq("id",userId).select().single();
    if(error){
       return res.status(400).json({status:false,
            message:error.message
        })
    }
    if(!data){
        return res.status(404).json({message:"customer not found"})
    }
    res.status(200).json({
        status:true,
        message:"user data deleted successfully",
        data
    })

    
}catch(error){
    res.status(500).json({
        status:false,
        error:error.message
    })

}
}

module.exports = {
  registerUser,
  getUsers, getSingleUser,updateUser,deleteUser
};

