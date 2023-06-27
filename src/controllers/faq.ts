import { Request, Response } from "express";
import FaqModel from "../models/Faq";
import { PropsFaqData } from "./types";

export const getAllFaq = async (_req: Request, res: Response) => {
  try {
    const getData = await FaqModel.find();
    res.send({ message: "getFaq", size: getData.length, data: getData });
  } catch (error) {
    console.log(error);
  }
};

export const postFaqs = async (req: Request, res: Response) => {
  const data: PropsFaqData = req.body;
  const newFaq = new FaqModel({
    ask: data.ask,
    answer: data.answer,
    status: data.status,
  });

  try {
    await newFaq.save();
    res.send({ message: "Successfully created", data: newFaq });
  } catch (error) {
    console.log(error);
  }
};

export const updateFaqs = async (req: Request, res: Response) => {
  const data: PropsFaqData = req.body;
  if (!data._id) {
    res.status(400).json({ message: "Missing required field: _id" });
    return;
  }
  try {
    const faq = await FaqModel.findById(data._id);
    if (!faq) {
      res.status(404).json({ message: "Faq not found" });
      return;
    } else {
      data.ask ? (faq.ask = data.ask) : null;
      data.answer ? (faq.answer = data.answer) : null;

      data.status ? (faq.status = data.status) : null;
      await faq.save();
    }
    res.send({ message: "Faq update successfully", data: faq });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating the Faq" });
    return;
  }
};

export const deleteFaq = async (req: Request, res: Response) => {
  const faqId = req.body._id; // ID de la pregunta frecuente a eliminar obtenido del cuerpo de la solicitud

  if (!faqId) {
    res.status(400).json({ message: "Missing required field: _id" });
    return;
  }

  try {
    const deletedFaq = await FaqModel.findByIdAndDelete(faqId);

    if (deletedFaq) {
      res.send({ message: "Faq deleted successfully", data: deletedFaq });
    } else {
      res.status(404).send({ message: "Faq not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error deleting the Faq" });
  }
};
