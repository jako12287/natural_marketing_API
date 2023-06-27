import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config";
const secretKey = SECRET_TOKEN as string;

interface CustomRequest extends Request {
  user?: any;
}

export const authenticate = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    jwt.verify(token as string, secretKey);
    return next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
    return;
  }
};
