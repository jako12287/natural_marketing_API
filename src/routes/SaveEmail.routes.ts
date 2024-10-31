import { Router } from "express";
import { saveEmails } from "../controllers/saveEmails";

const router = Router();

router.post("/saveemails", saveEmails);

export default router;
