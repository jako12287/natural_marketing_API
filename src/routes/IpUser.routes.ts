import { Router } from "express";
import { postIpUser } from "../controllers/ipUser";

const router =  Router();

router.post("/ipUser", postIpUser);

export default router;