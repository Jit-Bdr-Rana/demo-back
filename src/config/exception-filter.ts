import { NextFunction, Request, Response } from "express";

export const exceptionHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).send({
    message: "internal server error",
    status: false,
  });
};
