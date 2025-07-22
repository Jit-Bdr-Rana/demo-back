import { ApiError } from "@exception/exception";
import { Request, Response, NextFunction } from "express";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("🚨 Error:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  if (err instanceof ApiError) {
    res.status(statusCode).json({
      success: false,
    });
  } else {
    res.status(statusCode).json({
      success: false,
      message,
    });
  }
}
