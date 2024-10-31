import { Request, Response } from "express";
import IpSaveModel from "../models/IpUser";
import axios from "axios";
import dayjs from "dayjs";

export const postIpUser = async (req: Request, res: Response) => {
  const { ip, originPage } = req.body;

  const startOfToday = dayjs().startOf("day").toDate();

  try {
    const existingVisit = await IpSaveModel.findOne({
      ip,
      createdAt: { $gte: startOfToday },
    });

    if (existingVisit) {
      return res.status(200).json({
        message: "Ya se ha registrado una visita de esta IP hoy.",
      });
    }

    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    const { city, country } = response.data;

    const ipSave = new IpSaveModel({ ip, city, country, originPage });

    await ipSave.save();

    return res.status(201).json({ message: "Información de IP guardada correctamente." });
  } catch (error) {
    return res.status(500).json({
      message: {
        en: "Internal server error",
        es: "Error interno del servidor",
      },
      error: { error },
    });
  }
};
