// Here their is some syntax which will remain same for all projects you made.
// here you have to import express.

import express from "express";
import { registerUser,verifyUser } from "../controller/user.controller.js";
const router = express.Router()

router.post("/register",registerUser)
router.get("/verify:token",verifyUser)  // Aap jo bhi : ke baad likhoge vo req.params me mil jayega in controller file.
router.post("/login",login)

// user profile route
// logout
// forgot password 
// reset password 
export default router