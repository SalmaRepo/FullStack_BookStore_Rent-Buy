import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";

export const auth= async (req,res,next)=>{
    try{
        const token  = req.headers.token;//take out  token from header
        console.log(token)
        const payload = jwt.verify(token, process.env.SECRET_KEY)////this compares both the tokens and
        //sends {_id:foundUser._id,email:foundUser.email}
        if(payload){
            // {_id: "dsfsea4w4222",email:"test123@gmail.com"}
            const user = await User.findById(payload._id)
            req.user=user;

            next() // forwarding request to next middleware 
        }
    }
    catch(err){
        console.log(err.message)
        next(err)
    }
}