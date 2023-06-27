import { Request, Response } from "express";
import Admin from "../models/Admin";
import { PropsAdminData } from "./types";
import bcrypt from "bcryptjs";
import { SECRET_REGISTRATION_CODE } from "../config";
export const getAdmin = async (_req: Request, res: Response) => {
  try {
    const getAdmin = await Admin.find();
    res.send({ message: "get Administrators", data: getAdmin });
  } catch (error) {}
};

export const registerAdmin = async (req: Request, res: Response) => {
  const data: PropsAdminData = req.body;
  const secretCode = SECRET_REGISTRATION_CODE;
  if (data.code !== secretCode) {
    res.status(403).json({ message: "Invalid secret code" });
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    res.status(400).json({ message: "Invalid email format" });
    return;
  }

  try {
    const existingAdmin = await Admin.findOne({ email: data.email });
    if (existingAdmin) {
      res.status(409).json({ message: "Email already exists" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordEncrypt = await bcrypt.hash(data.password, salt);
    const newAdmin = new Admin({
      email: data.email,
      password: passwordEncrypt,
    });

    await newAdmin.save();
    res.send({ message: "Success registering the new admin" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
