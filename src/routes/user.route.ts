import userController from "@controller/user.controller";
import { Router } from "express";

const router = Router();

router.get("/", userController.getUser);

export { router as userRouter };
