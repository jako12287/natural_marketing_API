import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config";
import { Request, Response } from "express";
const secretKey = SECRET_TOKEN as string;

interface PropsGenerate {
  userId: string;
}

interface PropsVerify {
  token: string;
}

export const generateToken = (userId: PropsGenerate) => {
  // Tiempo de caducidad (24 horas a partir del momento actual)
  const payload = { userId, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 };
  const token = jwt.sign(payload, secretKey);
  return token;
};

export const verifyToken = (req: Request, res: Response) => {
  const { token } = req.body;
  try {
    jwt.verify(token, secretKey);
    res.send({
      message: {
        en: "Authorized",
        es: "Autorizado",
      },
      data: { authorized: true },
    });
    return;
  } catch (error) {
    console.log({ error });
    res.send({
      message: {
        en: "Unauthorized",
        es: "No autorizado",
      },
      data: { authorized: false },
    });
    return;
  }
};
