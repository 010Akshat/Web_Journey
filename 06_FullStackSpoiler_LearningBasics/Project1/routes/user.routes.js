// Here their is some syntax which will remain same for all projects you made.
// here you have to import express.

import express from "express";
import { registerUser } from "../controller/user.controller.js";
const router = express.Router()

router.get("/register",registerUser)
export default router