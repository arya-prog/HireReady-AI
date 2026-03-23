import express from "express";
import { googleAuth, logout } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/isAuth.js";
const authRouter = express.Router();

authRouter.post("/google", isAuth, googleAuth);
authRouter.post("/logout", logout);
export default authRouter;
