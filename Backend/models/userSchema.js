import { Schema, model } from "mongoose";

const userSchema = new Schema({

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  /*  email : {type:String , required:true,index:{unique:true}}, */ //add index in email, if we want avoid double emails in DB
  email: { type: String, required: true },
  password: { type: String, required: true },
  /*role :{type: String , enum :["admin","user"]},*/ //create admin in DB and then remove admin in enum
  role: { type: String, enum: ["admin", "user"] },
  orders: [{ type: Schema.Types.ObjectId, ref: "order" }]

})

const User = model("user", userSchema);

export default User;