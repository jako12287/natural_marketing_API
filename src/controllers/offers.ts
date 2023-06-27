import { Request, Response } from "express";
import OffersModel from "../models/Offers";
import { PropsOffersData } from "./types";

export const getAllOffers = async (_req: Request, res: Response) => {
  try {
    const getData = await OffersModel.find();
    res.send({ message: "getOffers", data: getData });
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

export const postOffers = async (req: Request, res: Response) => {
  const data: PropsOffersData = req.body;
  const newOffer = new OffersModel({
    photos: data.photos,
    status: data.status,
  });

  try {
    await newOffer.save();
    res.send({ message: "Successfully created", data: newOffer });
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

export const deleteOffer = async (req: Request, res: Response) => {
  const data: PropsOffersData = req.body;

  if (!data._id) {
    res.status(400).json({
      message: {
        en: "Missing required field: _id",
        es: "Falta el campo obligatorio: _id",
      },
    });
    return;
  }

  try {
    const offer = await OffersModel.findById(data._id);

    if (!offer) {
      res.status(404).json({
        message: { en: "Offer not found", es: "Oferta no encontrada" },
      });
      return;
    }

    await offer.deleteOne();

    return res.send({ message: "Offer deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: {
        en: "Internal server error",
        es: "Error interno del servidor",
      },
      error: { error },
    });
    return;
  }
};
