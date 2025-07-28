import { NotFoundEXception } from "@exception/NotFountException";
import { Category } from "@models/category.model";
import { Request, Response } from "express";

export class CategoryController {
  async getAllCategory(req: Request, res: Response) {
    const category = await Category.findAll();
    res.send({
      data: category,
      message: "Category has been fetched successfully",
      status: true,
    });
  }
  async saveCategory(req: Request, res: Response) {
    const payload = req.body;
    const category = new Category();
    category.name = payload.name;
    category.title = payload.title;
    await category.save();
    res.send({
      data: category,
      message: "Category has been saved successfully",
      status: true,
    });
  }
  async deleteCategory(req: Request, res: Response) {
    const payload = req.body;
    const category = await Category.findByPk(payload.id);
    if (!category) {
      throw new NotFoundEXception("Category not found");
    }
    await category.destroy();
    res.send({
      data: category,
      message: "Category has been deleted successfully",
      status: true,
    });
  }
  async updateCategory(req: Request, res: Response) {
    const payload = req.body;
    const category = await Category.findByPk(payload.id);
    if (!category) {
      throw new NotFoundEXception("Category not found");
    }
    category.name = payload?.name;
    category.title = payload?.title;
    await category.save();
    res.send({
      data: category,
      message: "Category has been updated successfully",
      status: true,
    });
  }
  async getCategoryById(req: Request, res: Response) {
    const payload = req.body;
    const category = await Category.findByPk(payload.id);
    res.send({
      data: category,
      message: "Category has been fetched successfully",
      status: true,
    });
  }
}

export default new CategoryController();
