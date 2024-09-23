import { Router } from "express";

import { dashboardControls } from "../controllers/dashboard.controller.js";


const dashRouter = Router();


dashRouter.get("/",dashboardControls.dashboard);
dashRouter.post("/onebooking/:id",dashboardControls.getOneBooking);
dashRouter.post("/delete/:id",dashboardControls.deleteBooking);

//dashRouter.get("/poll",dashboardControls.resetCounter);
//dashRouter.get("/pollreset",dashboardControls.resetCounterPost)



export {dashRouter};