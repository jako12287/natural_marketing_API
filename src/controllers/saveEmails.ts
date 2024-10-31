import { Request, Response } from "express";
import SaveEmailsModel from "../models/saveEmails";

export const saveEmails = async (req: Request, res: Response) => {
  const { name, email, checked } = req.body;

  const newEmail = new SaveEmailsModel({
    name,
    email,
    checked,
  });

  try {
    await newEmail.save();
    res.status(201).json({ message: "Email saved successfully" });
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
