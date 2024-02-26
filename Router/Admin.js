import express from "express";
import { adminGoogleAuth, adminLogin, adminSignup } from "../Controllers/Admin.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", adminSignup)

//SIGN IN
router.post("/login", adminLogin)

//GOOGLE AUTH
router.post("/google", adminGoogleAuth)

export default router;