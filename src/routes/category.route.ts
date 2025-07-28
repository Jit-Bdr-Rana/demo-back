import categoryController from "@controller/category.controller";
import { Router } from "express";

const router = Router();

/**
 * @openapi
 * /category:
 *  get:
 *     summary: summary
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       201:
 *         description: Category created successfully
 */
router.get("/", categoryController.getAllCategory);
/**
 * @openapi
 * /category:
 *  get:
 *     summary: summary
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       201:
 *         description: Category created successfully
 * */
router.post("/", categoryController.saveCategory);
/**
 * @openapi
 * /category:
 *  post:
 *     summary: summary
 *     tags:
 *       - Category
 *     responses:
 *       201:
 *         description: Category created successfully
 */
router.get("/:id", categoryController.getCategoryById);
/**
 * @openapi
 * /category:
 *  delete:
 *     summary: summary
 *     tags:
 *       - Category
 *     responses:
 *       201:
 *         description: Category fetched successfully
 */
router.delete("/:id", categoryController.deleteCategory);
/**
 * @openapi
 * /category:
 *  patch:
 *     summary: summary
 *     tags:
 *       - Category
 *     responses:
 *       201:
 *         description: Category created successfully
 */
router.patch("/:id", categoryController.updateCategory);

export { router as categoryRouter };
