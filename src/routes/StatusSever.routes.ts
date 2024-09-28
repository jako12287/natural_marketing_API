import { Router } from "express";
import { StatusServer } from "../controllers/statusServerController";

const router = Router();

router.get("/status", StatusServer);

export default router;
