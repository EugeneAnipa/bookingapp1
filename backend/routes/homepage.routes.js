import {Router} from "express";


import { homepageControls } from "../controllers/homepage.controller.js";



const homepageRouter = Router();

homepageRouter.get("/",homepageControls.homepageGet);
homepageRouter.post("/",homepageControls.homepagePostBookingInfo);

homepageRouter.get("/poll",homepageControls.resetCounter);
homepageRouter.get("/pollreset",homepageControls.resetCounterPost)

export {homepageRouter};