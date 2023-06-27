import { Request, Response } from "express";
import Admin from "../models/Admin";
import { PropsAdminData } from "./types";
import bcrypt from "bcryptjs";
import { SECRET_REGISTRATION_CODE } from "../config";
export const getAdmin = async (_req: Request, res: Response) => {
  try {
    const getAdmin = await Admin.find();
    res.send({ message: "get Administrators", data: getAdmin });
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

export const registerAdmin = async (req: Request, res: Response) => {
  const data: PropsAdminData = req.body;
  const secretCode = SECRET_REGISTRATION_CODE;
  if (data.code !== secretCode) {
    res.status(403).json({
      message: { en: "Invalid secret code", es: "Código secreto no válido" },
    });
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    res.status(400).json({
      message: {
        en: "Invalid email format",
        es: "Formato de email invalido",
      },
    });
    return;
  }

  try {
    const existingAdmin = await Admin.findOne({ email: data.email });
    if (existingAdmin) {
      res.status(409).json({
        message: { en: "Email already exists", es: "El email ya existe" },
      });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordEncrypt = await bcrypt.hash(data.password, salt);
    const newAdmin = new Admin({
      email: data.email,
      password: passwordEncrypt,
    });

    await newAdmin.save();
    res.send({
      message: {
        en: "Success registering the new admin",
        es: "Administrador registrado con exito",
      },
    });
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
