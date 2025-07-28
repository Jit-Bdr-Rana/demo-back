import { User } from "@models/user.model";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { UserDetails } from "@models/userDetails.model";
class UserController {
  async getAllUser(req: Request, res: Response) {
    const user = await User.findAll();
    res.send({
      data: user,
      message: "User has been fetched successfully",
      status: true,
    });
  }
  async saveUser(req: Request, res: Response) {
    //save user
    const payload = req.body;

    const user = await User.create();
    user.email = payload.email;
    // user.password = payload.password;
    user.username = payload.username;
    user.isActive = payload.isActive;
    const hashpassword = await bcrypt.hash(payload.password, 10);
    user.password = hashpassword;
    await user.save();

    //save user details

    const userDetails = new UserDetails();
    userDetails.firstName = payload.firstName;
    userDetails.middleName = payload.middleName;
    userDetails.lastName = payload.lastName;
    userDetails.address = payload.address;
    userDetails.phoneNumber = payload.phoneNumber;
    userDetails.userId = user.id;
    userDetails.save();

    res.send({
      data: user,
      message: "User and User details has been saved successfully",
      status: true,
    });
  }
}

export default new UserController();
