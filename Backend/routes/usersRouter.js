import {Router} from "express"

import { auth } from "../middlewares/authorization.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { userValidation } from "../middlewares/validation.js";

const router=Router()

router.post("/register",userValidation,register)
router.post("/login",login);
router.get("/allUsers",auth,isAdmin,getAllUsers);
router.get("/getUserById/:id",auth,isAdmin,getUserById);
router.patch("/update/:id",auth,isAdmin, updateUser);
router.delete("/deleteUser/:id",auth,isAdmin,deleteUser);
router.get("/verifytoken", auth, (req,res)=>{
    res.send({success:true, data:req.user})
  } )
router.get("/getAllOrdersOfUser",auth,isAdmin,getAllOrdersOfUser)


export default router;