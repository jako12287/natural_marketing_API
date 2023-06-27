import { Request, Response } from "express";
import OffersModel from "../models/Offers";
import { PropsOffersData } from "./types";

export const getAllOffers = async (_req: Request, res: Response) => {
  try {
    const getData = await OffersModel.find();
    res.send({ message: "getOffers", size: getData.length, data: getData });
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const deleteOffer = async (req: Request, res: Response) => {
  const data: PropsOffersData = req.body;

  if (!data._id) {
    res.status(400).json({ message: "Missing required field: _id" });
    return;
  }

  try {
    const offer = await OffersModel.findById(data._id);

    if (!offer) {
      res.status(404).json({ message: "Offer not found" });
      return;
    }

    await offer.deleteOne();

    return res.send({ message: "Offer deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting the offer" });
    return;
  }
};
