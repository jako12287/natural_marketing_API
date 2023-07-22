import { Router } from "express";
import { postSend } from "../controllers/sendeamil";

const router = Router();

router.post("/sendemail", postSend);

export default router;
