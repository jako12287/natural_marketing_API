import { Router } from "express";
import { Login } from "../controllers/auth";

const router = Router();
router.post("/login", Login);

export default router;
