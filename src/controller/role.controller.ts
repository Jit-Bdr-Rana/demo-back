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
  }

  async saveRole(req: Request, res: Response) {
    const request: IRoleRequest = req.body;
    const newRole = await Role.create();
    newRole.name = request.name;
    newRole.description = request.description;
    newRole.save();

    res.send(newRole);
  }

  async getRoleById(req: Request, res: Response) {
    const roleId = req.params.id;
    const getRoleById = await Role.findByPk(roleId);
    res.send(getRoleById);
  }

  async deleteRoleById(req: Request, res: Response) {
    const roleId = req.params.id;
    const deleteRoleById = await Role.destroy({ where: { id: roleId } });
    res.send(deleteRoleById);
  }

  async updateRoleById(req: Request, res: Response) {
    const roleId = req.params.id;
    const request: IRoleRequest = req.body;
    const updateRoleById = await Role.update(
      { name: request.name, description: request.description },
      { where: { id: roleId } }
    );
    res.send(updateRoleById);
  }
}

export default new RoleController();
