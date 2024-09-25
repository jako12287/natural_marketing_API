import { Request, Response } from "express";
import NewsModel from "../models/Newslatter";

export const postNewslatter = async (req: Request, res: Response) => {
  const email = req.body.email;

  const subscribeNewslatter = new NewsModel({
    email,
  });

  try {
    await subscribeNewslatter.save();
    res.send({ message: "Successfully subscribed to newsletter" });
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
