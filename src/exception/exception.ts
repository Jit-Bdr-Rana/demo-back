// utils/ApiError.ts
export class ApiError extends Error {
  statusCode: number;
  description: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.description = "internal server error";
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
