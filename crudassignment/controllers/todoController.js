import express from "express"


export const getAllTodos=async(req,res,next)=>{
    try{
        const {data,error}= await supabase.from("todos").select('*');
        if (error) throw error;
        res.json({message:"All todos are fetched successfully",data:data})
    }catch(err)
    {
    next(err)
    }

}


export const getTodoById=async(req,res,next)=>{
    const id=Number(req.params.todoId);
    try{
        const {data,error} = await supabase.from("todos").select('*')
        .eq("id",id)
    .single();
    if(!data) return res.status(404).json({message:"Todo not found"})
        if (error) throw error;
        res.json({message:"Todo is fetched successfully",data:data})
    }catch(err)
    {
    next(err)
    }
}


export const addTodo=async(req,res,next)=>{
    const{name,status}=req.body;
    try{
        const {data,error}= await supabase.from("todos")
        .insert([{name,status}])
        .select();
        if (error) throw error;
        res.send({message:" todo added successfully",data:data[0]})
    }catch(err)
    {
    next(err)
    }

}


export const updateTodo=async(req,res,next)=>{
    const id=Number(req.params.todoId);
    const{name,status}=req.body;
    try{
        const {data,error}= await supabase.from("todos").
        update([{name,status}]).eq("id",id)
        .select();
        if(!data||data.length===0) return res.status(404).json({message:"Todo not found"})
        if (error) throw error;
        res.json({message:" todos updated successfully",data:data[0]})
    }catch(err)
    {
    next(err)
    }
}



export const deleteTodo=async(req,res,next)=>{
    try{
        const {data,error}= await supabase.from("todos").delete()
        .eq("id",id).select();
        
        if(!data||data.length===0) return res.status(404).json({message:"Todo not found"})
        if (error) throw error;
        res.json({message:"All todo deleted successfully",data:data[0]})
    }catch(err)
    {
    next(err)
    }
}
