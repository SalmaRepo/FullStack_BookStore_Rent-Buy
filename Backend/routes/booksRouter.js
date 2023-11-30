import {Router} from "express"
import { auth } from "../middlewares/authorization.js";
import { isAdmin } from "../middlewares/isAdmin.js";

import { getAllBooks,getBookById,createBook,updateBook,deleteBook } from "../controllers/booksController.js";
const router=Router()


router.get("/allBooks",getAllBooks);
router.get("/getBookById/:id",getBookById);
router.post("/createBook",auth,isAdmin,createBook);
router.patch("/updateBook/:id",auth,isAdmin,updateBook);
router.delete("/deleteBook/:id",auth,isAdmin,deleteBook)


export default router