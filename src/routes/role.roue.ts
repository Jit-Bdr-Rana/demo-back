import { Router } from "express";
import roleController from "@controller/role.controller";

const router = Router();

/**
 * @openapi
 * /role:
 *   get:
 *     summary: Greet the user
 *     responses:
 *       200:
 *         description: A simple greeting
 */
router.get("/", roleController.getAll);
/**
 * @openapi
 * /role:
 *   post:
 *     summary: Greet the user
 *     responses:
 *       200:
 *         description: A simple greeting
 */
router.post("/", roleController.saveRole);
/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to retrieve
 *     responses:
 *       200:
 *         description: User fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *             example:
 *               id: 1
 *               name: Jit Rana
 *               email: jit@example.com
 *       404:
 *         description: User not found
 */

router.get("/:id", roleController.getRoleById);
router.delete("/:id", roleController.deleteRoleById);
router.patch("/:id", roleController.updateRoleById);

export { router as roleRouter };
