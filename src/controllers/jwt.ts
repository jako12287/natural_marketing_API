import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config";
const secretKey = SECRET_TOKEN as string;

interface PropsGenerate {
  userId: string;
}

interface PropsVerify {
  token: string;
}

export const generateToken = (userId: PropsGenerate) => {
  const payload = { userId };
  const token = jwt.sign(payload, secretKey);
  return token;
};

export const verifyToken = (token: PropsVerify["token"]) => {
  const decode = jwt.verify(token, secretKey);
  if (!decode) return null;
  return decode;
};





