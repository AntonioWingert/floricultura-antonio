import { Router } from "express";
import UserController from "../controllers/userController";
import LoginValidate from "../middlewares/LoginValidate";
import TokenValidate from "../middlewares/TokenValidate";

const router = Router();

router.post("/", 
LoginValidate.validate,
UserController.login)

router.post("/register",
TokenValidate.isAdmin,
UserController.register,
);

export default router;