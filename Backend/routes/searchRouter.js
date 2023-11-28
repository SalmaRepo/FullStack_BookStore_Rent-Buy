import {Router} from "express"
import { auth } from "../middlewares/authorization.js";
import { isAdmin } from "../middlewares/isAdmin.js";

const router=Router()

import { searchBooksByName } from "../controllers/searchController.js";

//api/search/book?name=
router.get("/book",searchBooksByName);


export default router