import Like from "../models/likeSchema.js";
import User from "../models/userSchema.js"


export const addLike=async (req,res,next)=>{
    try{
    const like=await Like.create(req.body)
if(like){
    res.send({success:true,data:like})
}else{
    res.send({success:false})
}
   
    }catch(err){
        next(err)
    }
}

export const updateLike=async (req,res,next)=>{
    try{
    const like=await Like.findOneAndUpdate({bookId:req.params.bookid},{$inc:{like:1}},{new:true})
if(like){
    res.send({success:true,data:like})
}else{
    res.send({success:false})
}
   
    }catch(err){
        next(err)
    }
}