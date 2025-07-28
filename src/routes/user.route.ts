import userController from "@controller/user.controller";
import { Router } from "express";

const router = Router();

router.post("/", userController.saveUser);
router.get("/", userController.getAllUser);

export { router as userRouter };
