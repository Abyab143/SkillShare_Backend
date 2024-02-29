import express from 'express';
import {createHack,getAllHack,deleteHack,updateHack,getHomeHack,getHack} from "../Controllers/Hack.js";

const router = express.Router();

//Create a new Course
router.post("/hack/create",createHack);
router.delete("/hack/delete/:id",deleteHack);
router.put("/hack/update/:id",updateHack);
router.get("/hack/allHack",getAllHack);
router.get("/hack/getHack",getHack);
router.get("/hack/homeHack",getHomeHack);

export default router;
