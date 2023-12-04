import { Router } from "express";

 import {
 addLike,
 updateLike

 

} from "../controllers/likesController.js";
import { auth } from "../middlewares/authorization.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = Router();

router.post("/addlike",addLike);//write-create
router.patch("/updatelike/:userid/:bookid",updateLike);//update 
/*router.delete("/delete/:id",auth,isAdmin,deleteOrder);//delete
router.get("/getallOrders",auth,isAdmin, getOrders);
router.get("/singleOrder/:id",auth,isAdmin, getSingleOrder)//read
router.get("/getOrderByUserId/:id",auth,isAdmin, getOrderByUserId)//read
 */
export default router;