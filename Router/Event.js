import express from 'express';
import {createEvent,getAllevent,deleteEvent,updateEvent,getHomeEvent} from "../Controllers/Event.js";

const router = express.Router();

//Create a new Course
router.post("/event/create",createEvent);
router.delete("/event/delete/:id",deleteEvent);
router.put("/event/update/:id",updateEvent);
router.get("/event/allEvents",getAllevent);
router.get("/event/homeEvents",getHomeEvent);

export default router;