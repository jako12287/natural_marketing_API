import { Router } from "express";
import { getAllOffers, postOffers, deleteOffer } from "../controllers/offers";
import { authenticate } from "../middlewares";

const router = Router();

router.get("/offers", getAllOffers);
router.post("/offers", authenticate, postOffers);
router.delete("/offers", authenticate, deleteOffer);

export default router;
