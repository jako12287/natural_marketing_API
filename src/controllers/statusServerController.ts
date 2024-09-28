import { Response } from "express";
import NewsModel from "../models/Newslatter";

export const StatusServer = async (_: any, res: Response) => {
  try {
    const quantity = await NewsModel.countDocuments();
    return res.status(200).json({
      message: "Server is running",
      emailsRegistered: quantity,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server is not running" });
  }
};
