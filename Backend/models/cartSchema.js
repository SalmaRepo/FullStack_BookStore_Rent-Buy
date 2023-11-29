import {Schema,model} from "mongoose";

const orderSchema=new Schema({
    books:[{type:Schema.Types.ObjectId,ref:"books"}],
    totalPrice:{type:Number,required:true},
    userId:{type:Schema.Types.ObjectId,ref:"user",required:true}
})

const Order=model("order",orderSchema)

export default Order;