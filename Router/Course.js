import express from 'express';
import {createCourse,getAllcourse,deleteCourse,updateCourse,getHomeCourse,getCourse,enrollCourse,getCourseByName, getCourseByType} from "../Controllers/Course.js";

const router = express.Router();

//Create a new Course
router.post("/course/create",createCourse);
router.get("/course/allcourse",getAllcourse);
router.get("/course/getCourse/id/:id",getCourse);
router.get("/course/getCourse/name/:name",getCourseByName);
router.get("/course/getCourse/type/:type",getCourseByType);
router.delete("/course/delete/:id",deleteCourse);
router.put("/course/update/:id",updateCourse);
router.get("/course/homeCourse",getHomeCourse);
router.put("/course/enrollCourse/:courseid/:userid",enrollCourse);

export default router;
