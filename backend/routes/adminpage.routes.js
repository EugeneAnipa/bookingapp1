import {Router} from "express";

import { adminControls } from "../controllers/adminpage.controller.js";


const adminRouter = Router();

adminRouter.get("/",adminControls.adminLoginpageGet);


adminRouter.get("/logout",adminControls.logoutGet);
adminRouter.post("/logout",adminControls.logoutPost);

adminRouter.post("/",adminControls.passAuth);

adminRouter.post("/signup",adminControls.adminSignUp);
adminRouter.get("/adminpage",adminControls.userNamePasser)
export {adminRouter};