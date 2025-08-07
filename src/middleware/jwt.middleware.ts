import { decodeToken } from "@utils/jwt";
import { NextFunction, Request, Response } from "express";

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("--------------------------------------------------", req.path);
  const publicPath = ["/api/auth/login"];
  console.log(req.path);
  if (publicPath.includes(req.path)) {
    console.log("bypass");
    next();
  } else {
    const token = req.headers.authorization?.split(" ")[1] as string;
    if (!token) {
      res.status(401).json({
        message: "Unauthorized",
        status: false,
      });
    }
    try {
      const verfiedToken = decodeToken(token);

      //@ts-ignore
      req.user = verfiedToken;
      next();
    } catch (error) {
      res.status(401).json({
        message: "Unauthorized",
        status: false,
      });
    }
  }
};
