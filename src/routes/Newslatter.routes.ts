import { Router } from "express";
import { postNewslatter } from "../controllers/news";

const router = Router()

router.post("/newslatter", postNewslatter)

export default router