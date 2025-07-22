import { NotFoundException } from "@exception/notfoundexception";
import { Role } from "@models/role.model";
import { Request, Response } from "express";

interface IRoleRequest {
  name: string;
  description: string;
}
export class RoleController {
  async getAll(req: Request, res: Response) {
    //    const getAllRoles=await Role.sequelize?.query(`select * from roles`)
    const getAllRoles = await Role.findAll();
    res.send({
      data: getAllRoles,
      message: "Role has been fetched successfully.",
      status: true,
    });
  }

  async saveRole(req: Request, res: Response) {
    const request: IRoleRequest = req.body;
    const newRole = await Role.create();
    newRole.name = request.name;
    newRole.description = request.description;
    newRole.save();

    res.send({
      message: "Role has been created successfully.",
      status: true,
    });
  }

  async getRoleById(req: Request, res: Response) {
    const roleId = req.params.id;
    const getRoleById = await Role.findByPk(roleId);
    res.send({
      data: getRoleById,
      message: "Role has been fetched successfully.",
      status: true,
    });
  }

  async deleteRoleById(req: Request, res: Response) {
    const roleId = req.params.id;
    const deleteRoleById = await Role.destroy({ where: { id: roleId } });
    res.send({
      data: deleteRoleById,
      message: "Role has been deleted successfully.",
      status: true,
    });
  }

  async updateRoleById(req: Request, res: Response) {
    const roleId = req.params.id;
    const request: IRoleRequest = req.body;
    const updateRoleById = await Role.update(
      { name: request.name, description: request.description },
      { where: { id: roleId } }
    );
    res.send({
      message: "Role has been updated successfully.",
      status: true,
    });
  }
}

export default new RoleController();
