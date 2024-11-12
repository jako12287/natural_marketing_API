import { Request, Response } from "express";
import EmailCatchugModel from "../models/emailCatchug";

export const saveEmails = async (req: Request, res: Response) => {
  const { name, email, checked } = req.body;

  const emailCatchug = new EmailCatchugModel({
    name,
    email,
    checked,
  });

  try {
    await emailCatchug.save();
    res.status(201).json({ message: "Rena Email saved successfully" });
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
