import { NextFunction, Request, Response } from "express";

export const exceptionHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  res.status(500).send({
    message: "internal server error",
    status: false,
  });
};
