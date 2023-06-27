import { Request, Response } from "express";
import ProductModel from "../models/Products";
import { PropsProductData } from "./types";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const getData = await ProductModel.find({});
    res.send({ message: "getAllProducts", data: getData });
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

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const getData = await ProductModel.findById(id);
    if (!getData) {
      res.send({ message: "Product not found", data: {} });
      return;
    }
    res.send({ message: `getProductById`, data: getData });
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

export const postProducts = async (req: Request, res: Response) => {
  const data: PropsProductData = req.body;
  const newProduct = new ProductModel({
    name: data.name,
    descriptionShort: data.descriptionShort,
    descriptionLarge: data.descriptionLarge,
    price: data.price,
    photos: data.photos,
    status: data.status,
  });
  try {
    await newProduct.save();
    res.send({ message: "200 ok", data: newProduct });
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

export const upDateProducts = async (req: Request, res: Response) => {
  const data: PropsProductData = req.body;
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
    const product = await ProductModel.findById(data._id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    } else {
      data.name ? (product.name = data.name) : null;
      data.descriptionShort
        ? (product.descriptionShort = data.descriptionShort)
        : null;
      data.descriptionLarge
        ? (product.descriptionLarge = data.descriptionLarge)
        : null;
      data.price ? (product.price = data.price) : null;
      data.photos ? (product.photos = data.photos) : null;
      data.status ? (product.status = data.status) : null;
      await product.save();
    }
    res.send({ message: "Product update successfully", data: product });
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

export const deleteProduct = async (req: Request, res: Response) => {
  const data: PropsProductData = req.body;

  if (!data._id) {
    res.status(400).json({ message: "Missing required field: _id" });
    return;
  }

  try {
    const product = await ProductModel.findById(data._id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await product.deleteOne();

    return res.send({ message: "Product deleted successfully" });
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
