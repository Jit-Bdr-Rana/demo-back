import { Request, Response } from "express";

class UserController {
  async getUser(req: Request, res: Response) {
    res.send("Hello World");
  }
}

export default new UserController();
