const validateAddTodo=(req,res,next)=>{
    const {title,description,userId}=req.body;
    if(!title || !userId){
        return res.status(401).json({
            status:false,
            message:"all the fields required"
        })
    }
next()
}
const validateTodoId=(req,res,next)=>{
    const {todoId}=req.params;
    if(!todoId){
        return res.status(404).json({
            status:false,
            message:"Todo Id required"

        })
    }
    next()
}
const validateUserId=(req,res,next)=>{
    const {userId}=req.params;
    if(!userId){
        return res.status(404).json({
            status:false,
            message:"Todo Id required"

        })
    }
    next();
}
module.exports={validateAddTodo,validateTodoId,validateUserId}