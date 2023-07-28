import { Request, Response } from "express";
import { PropsAdminData } from "./types";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin";
import { generateToken } from "./jwt";

export const Login = async (req: Request, res: Response) => {
  const data: PropsAdminData = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    res.status(400).json({ message: "Invalid email format" });
    return;
  }
  try {
    const adminindb = await Admin.findOne({ email: data.email });
    if (!adminindb || !adminindb?.password) {
      res.send({ message: "Invalid email or password" });
      return;
    } else {
      const passwordMatch = await bcrypt.compare(
        data.password,
        adminindb.password
      );
      if (!passwordMatch) {
        res.send({ message: "Invalid email or password" });
        return;
      }

      const token = generateToken(adminindb?._id);

      res.send({
        message: { en: "login success", es: "Inicio de sesión exitoso" },
        token,
        user: { _id: adminindb._id, email: adminindb.email },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: {
        en: "Internal server error",
        es: "Error interno del servidor",
      },
      error: { error },
    });
  }
};
