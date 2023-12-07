import {Schema,model} from "mongoose";

const orderSchema=new Schema({
    books:[{type:Schema.Types.ObjectId,ref:"books"}],
    totalPrice:{type:Number,required:true},
    userId:{type:Schema.Types.ObjectId,ref:"user",required:true},
    tobuy:{type:Boolean,default:false},
    toRent:{type:Boolean,default:false},
    rentTill:{type:String},
    orderPlacedOn:{type:Date}
})

const Order=model("order",orderSchema)

export default Order;