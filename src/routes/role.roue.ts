import { Router } from "express";
import roleController from "@controller/role.controller";

const router = Router();

router.get("/", roleController.getAll);
router.post("/", roleController.saveRole);
router.get("/:id", roleController.getRoleById);
router.delete("/:id", roleController.deleteRoleById);
router.patch("/:id", roleController.updateRoleById);

export { router as roleRouter };
