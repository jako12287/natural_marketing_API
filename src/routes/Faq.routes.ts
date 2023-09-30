import { Router } from "express";
import {
  getAllFaq,
  postFaqs,
  updateFaqs,
  deleteFaq,
  getFaqById,
} from "../controllers/faq";
import { authenticate } from "../middlewares";

const router = Router();

router.get("/faq", getAllFaq);
router.get("/faq/:id", getFaqById);
router.post("/faq", authenticate, postFaqs);
router.put("/faq", authenticate, updateFaqs);
router.delete("/faq", authenticate, deleteFaq);

export default router;
