import { Request, Response } from "express";
import FaqModel from "../models/Faq";
import { PropsFaqData } from "./types";

export const getAllFaq = async (_req: Request, res: Response) => {
  try {
    const getData = await FaqModel.find();
    res.send({ message: "getFaq", data: getData });
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
    res.status(500).json({
      message: {
        en: "Internal server error",
        es: "Error interno del servidor",
      },
      error: { error },
    });
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
    res.status(500).json({
      message: { en: "Error updating", es: "Error al actualizar" },
      error: { error },
    });
    return;
  }
};

export const deleteFaq = async (req: Request, res: Response) => {
  const faqId = req.body._id;

  if (!faqId) {
    res.status(400).json({
      message: {
        en: "Missing required field: _id",
        es: "Falta el campo obligatorio: _id",
      },
    });
    return;
  }

  try {
    const deletedFaq = await FaqModel.findByIdAndDelete(faqId);

    if (deletedFaq) {
      res.send({
        message: { en: "Deleted successfully", es: "Eliminada con éxito" },
        data: deletedFaq,
      });
    } else {
      res
        .status(404)
        .send({ message: { en: "Faq not found", es: "Faq no encontrada" } });
    }
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
