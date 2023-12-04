import {Schema,model} from "mongoose";

const reviewSchema=new Schema({
    review:{type:String},
    userId:{type:Schema.Types.ObjectId,ref:"user",required:true}
})

const Review=model("like",reviewSchema)

export default Review;