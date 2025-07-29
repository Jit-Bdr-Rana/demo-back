import { upload } from "@config/multer";
import postController from "@controller/post.controller";
import { Router } from "express";

const router = Router();

router.post("/", upload.array("images", 10), postController.savePost);

export { router as postRouter };
