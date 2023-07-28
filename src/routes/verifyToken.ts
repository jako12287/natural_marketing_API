import { Router } from "express";
import { verifyToken } from "../controllers/jwt";

const router = Router();
router.post("/verify-token", verifyToken);

export default router;
