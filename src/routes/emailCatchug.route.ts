import { Router } from "express";
import { saveEmails } from "../controllers/saveEmailCatchug";

const router = Router()

router.post("/rena/emailcathug", saveEmails)

export default router