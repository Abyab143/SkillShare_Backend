import express from 'express';
import {createCourse,getAllcourse,deleteCourse,updateCourse,getHomeCourse} from "../Controllers/Course.js";

const router = express.Router();

//Create a new Course
router.post("/course/create",createCourse);
router.get("/course/allcourse",getAllcourse);
router.delete("/course/delete",deleteCourse);
router.put("/course/update",updateCourse);
router.get("/course/homeCourse",getHomeCourse);

export default router;