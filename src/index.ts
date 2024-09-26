import app from "./app";
import express from "express";
import cors from "cors";
import conectDB from "./dataBase";
import routerSendEmail from "./routes/sendEmail.routes";
import routerNewslatter from "./routes/Newslatter.routes";
import { PORT } from "./config";

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(routerSendEmail);
app.use(routerNewslatter);

app.get("*", (_req, res) => {
  res.send({ message: "No products available", data: {} });
});

conectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
  });
});
