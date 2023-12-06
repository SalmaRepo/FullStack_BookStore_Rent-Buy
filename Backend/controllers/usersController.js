import User from "../models/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async (req, res, next) => {
  try {
    const foundUser = await User.findOne({
      email: req.body.email,
     /*  password: req.body.password, */
    });

    if (foundUser) {
    /*   const hashedPassword=bcrypt.hashSync(req.body.password,10); */
    const check=await bcrypt.compare(req.body.password,foundUser.password)//112346, $2b$10$2t.KTg7xcf5XOBK5YeeYq.fNHq8cTh1B2xi8VgSxxjkU2qkrw5ci6


      if(check){
        //authentication process
        //jwt.sign(payload,secretkey,options)
        const token=jwt.sign({_id:foundUser._id,email:foundUser.email},process.env.SECRET_KEY,{issuer:"Naqvi",expiresIn:"24h"})

        console.log(token)
        //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTViNjMwZDY3OGYxMWI0ZDFmYjUxMDgiLCJlbWFpbCI6InRlc3QxMjNAZ21haWwuY29tIiwiaWF0IjoxNzAwNDg3OTkwLCJleHAiOjE3MDA0OTE1OTAsImlzcyI6Ik5hcXZpIn0.7gTRNYIRHsFx3wGakdIgmuWgYOev95bYN42ErvfHLyA
      /*       res.send({msg: "welcome back", foundUser, token}); */
      res.header("token",token).send({success: true, data:foundUser.populate("orders")});
      /* res.cookie("token",token).send({msg: "welcome back", foundUser}); */
    
      }else{
        res.status(401).send({success:false, message:"password doesn't match!"});
      }
      
    }else{
       // if there is no user found, then send this response
       res.send({success:false, message:"Make sure your email is correct!"});
       /* res.json("Make sure your email is correct!") */
    }

   
  } catch (err) {
    next(err);
  }
};

export const register = async (req, res, next) => {
  try {
     //   "hello" E4wnd46S
    // "@h§4jkjgfjHello"
    /* const salt = bcrypt.genSaltSync(10)
    console.log(salt)
    const hashedPassword = await bcrypt.hash(req.body.password,salt) */
    const hashedPassword=bcrypt.hashSync(req.body.password,10);
    console.log(hashedPassword)
    const newUser = await User.create({...req.body,password:hashedPassword});
    res.status(200).send(newUser); 

  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }); 

   /*  const user=await User.findOne({_id:req.params.id}) */

   res.status(300).send(user)



  } catch (err) {
    next(err);
  }
};

export const getUserById=async (req,res,next)=>{
try{

    const getOneUser=await User.findById(req.params.id)
    res.send(getOneUser)

}catch(err){
    next(err)
}
}

export const deleteUser = async (req, res, next) => {
    try {
        const deleteOne = await User.findByIdAndDelete(req.params.id,{new:true}); 
   
      /*  const user=await User.findOne({_id:req.params.id}) */
   
      res.send("user deleted")
   
   
   
     } catch (err) {
       next(err);
     }

};

export const getAllUsers = async (req, res, next) => {
    try {
        const getAll = await User.find();  
   
      /*  const user=await User.findOne({_id:req.params.id}) */
   
      res.json(getAll)
   
   
   
     } catch (err) {
       next(err);
     }

};

export const getAllOrdersOfUser=async (req,res,next)=>{
  try {
    const user = await User.findOne({_id:req.params.id}).populate({ path: "orders", populate: { path: "books" } })
    

  /*  const user=await User.findOne({_id:req.params.id}) */
console.log(user)
  res.send(user)



 } catch (err) {
   next(err);
 }

}


