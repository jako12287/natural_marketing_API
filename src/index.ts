import app from "./app";
import express from "express";
import cors from "cors";
import routeProducts from "./routes/Products.routes";
import routerOffers from "./routes/Offers.routes";
import conectDB from "./dataBase";
import routerFaq from "./routes/Faq.routes";
import routerAdmin from "./routes/admin.routes";
import routerLogin from "./routes/Auth.routes";
import routerSendEmail from "./routes/sendEmail.routes";
import routerVerifyToken from "./routes/verifyToken";
import { PORT } from "./config";

app.use(cors());
app.use(express.json());
app.use(routerLogin);
app.use(routeProducts);
app.use(routerOffers);
app.use(routerFaq);
app.use(routerAdmin);
app.use(routerSendEmail);
app.use(routerVerifyToken);

conectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
  });
});
