import Jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
export const generateToken = (payload: any) => {
  const secret = process.env.SECRET || "secret";
  return Jwt.sign(payload, secret, { expiresIn: "6h", algorithm: "HS512" });
};

export const decodeToken = (token: string) => {
  const secret = process.env.SECRET || "secret";
  return Jwt.verify(token, secret, { algorithms: ["HS512"] });
};
