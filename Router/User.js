import express from "express";
import {
  googleAuth,
  login,
  signup,
  enrollCourse,
} from "../Controllers/User.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup);

//SIGN IN
router.post("/login", login);

//GOOGLE AUTH
router.post("/google", googleAuth);
router.get("/enroll/:userid", enrollCourse);

export default router;
