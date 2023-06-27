import { Router } from "express";
import { getAdmin, registerAdmin } from "../controllers/admin";
import { authenticate } from "../middlewares";
const router = Router();

router.get("/_admin", authenticate, getAdmin);
router.post("/_admin", registerAdmin);

export default router;
