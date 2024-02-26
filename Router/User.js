import express from "express";
import { googleAuth, login, signup } from "../Controllers/User.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup)

//SIGN IN
router.post("/login", login)

//GOOGLE AUTH
router.post("/google", googleAuth)

export default router;