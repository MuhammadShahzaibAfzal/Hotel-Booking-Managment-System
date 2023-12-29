import { Router } from "express";
import authController from "../controllers/auth-controllers.js";
import upload from "../middlewares/multer-middleware.js";

const authRouter = Router();

authRouter.post(
  "/register",
  upload.single("profileImage"),
  authController.registerUser
);

export default authRouter;
