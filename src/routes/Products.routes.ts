import { Router } from "express";
import {
  getProducts,
  postProducts,
  upDateProducts,
  deleteProduct,
  getProductById,
} from "../controllers/products";
import { authenticate } from "../middlewares";

const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products",authenticate, postProducts);
router.put("/products", authenticate, upDateProducts);
router.delete("/products", authenticate, deleteProduct);

export default router;
