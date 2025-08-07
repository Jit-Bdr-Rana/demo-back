import AuthController from "@controller/auth.controller";
import { Router } from "express";

const router = Router();
router.post("/login", AuthController.login);
router.get("/init", AuthController.init);

export { router as authRouter };
