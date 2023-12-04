import {Schema,model} from "mongoose";

const likeSchema=new Schema({
    like:{type:Number,default:0},
    bookId:{type:Schema.Types.ObjectId,ref:"books",required:true},
    userId:{type:Schema.Types.ObjectId,ref:"user",required:true}
})

const Like=model("like",likeSchema)

export default Like;