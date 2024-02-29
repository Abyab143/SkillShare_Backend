import express from 'express';
import {createCourse,getAllcourse,deleteCourse,updateCourse,getHomeCourse,getCourse} from "../Controllers/Course.js";

const router = express.Router();

//Create a new Course
router.post("/course/create",createCourse);
router.get("/course/allcourse",getAllcourse);
router.get("/course/getCourse",getCourse);
router.delete("/course/delete/:id",deleteCourse);
router.put("/course/update/:id",updateCourse);
router.get("/course/homeCourse",getHomeCourse);

export default router;
