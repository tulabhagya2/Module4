const validateUserRegister=(req,res,next)=>{
    try{
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        return res.status(401).json({status:"false",
            message:"all the fields required"})
    };
    if( typeof name!=="string" || name.trim()===""){
        return res.status(401).json({
            status:false,
            message:"Invalid name"
        })
    }
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(401).json({
            status:false,
            message:"Invalid email"
        })

    }
    
    if(phone.length < 10){
        return res.status(401).json({
            status:"false",
            message:"phone number must be 10 digits"
        })
    }
}catch(error){
    return res.status(500).json({
        status:false,
        message:"Internal server error"
    })
}
next()
}
const validateUserId=(req,res,next)=>{
    const {userId}=req.params;
    if(!userId){
        return res.status(401).json({message:"userId required",
            status:false
        })
    }
    next();


}
module.exports={validateUserRegister,validateUserId}