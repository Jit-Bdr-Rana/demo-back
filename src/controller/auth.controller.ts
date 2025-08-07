import { LoginDto } from "@dto/auth.dto";
import { NotFoundEXception } from "@exception/NotFountException";
import { User } from "@models/user.model";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { generateToken } from "@utils/jwt";
import { UserDetails } from "@models/userDetails.model";
export class AuthController {
  async login(req: Request, res: Response) {
    const loginDto = plainToInstance(LoginDto, req.body);
    const error = await validate(loginDto);
    if (error.length > 0) {
      res.status(400).json({
        message: "Validation error",
        errors: error.map((data) => {
          return {
            [data.property]: data.constraints,
          };
        }),
      });
    } else {
      const user = await User.findOne({
        where: {
          email: loginDto.email,
        },
      });
      if (!user) {
        throw new NotFoundEXception("User not found");
      }
      const isvalidPassword = await bcrypt.compare(
        loginDto.password,
        user.password
      );
      if (!isvalidPassword) {
        throw new NotFoundEXception("Password did not match");
      }
      const token = generateToken({ id: user.id, email: user.email });
      res.send({
        message: "Login successful",
        token,
      });
    }
  }

  async init(req: Request, res: Response) {
    //@ts-ignore
    const user = req.user;
    const currentUser = await User.findOne({
      where: {
        id: user.id,
      },
      attributes: { exclude: ["password"] },
      include: [UserDetails],
    });
    //@ts-ignore
    delete currentUser.password;

    if (!currentUser) {
      throw new NotFoundEXception("user not found");
    }
    res.status(200).send({
      user: currentUser,
    });
  }
}

export default new AuthController();
