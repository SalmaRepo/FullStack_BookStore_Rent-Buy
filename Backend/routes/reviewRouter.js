import { Router } from "express";

 import {
 addOrder,
 deleteOrder,
 getOrders,
 updateOrder,
 getSingleOrder,
 getOrderByUserId

} from "../controllers/cartController.js";
import { auth } from "../middlewares/authorization.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router = Router();

router.post("/addorder",auth,isAdmin,addOrder);//write-create
router.patch("/updateOrder/:id",auth,isAdmin,updateOrder);//update */
router.delete("/delete/:id",auth,isAdmin,deleteOrder);//delete
router.get("/getallOrders",auth,isAdmin, getOrders);
router.get("/singleOrder/:id",auth,isAdmin, getSingleOrder)//read
router.get("/getOrderByUserId/:id",auth,isAdmin, getOrderByUserId)//read

export default router;