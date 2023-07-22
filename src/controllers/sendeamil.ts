import { Request, Response } from "express";
import nodemailer, { Transporter, SendMailOptions } from "nodemailer";
import { EMAIL, PASSWORDEMAIL } from "../config";
import { htmlContentAdmin, htmlContentUser } from "../utils/templateSendEmail";

const transporter: Transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORDEMAIL,
  },
});

export const postSend = (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;
  console.log("datos de body senemail", name, email, phone, message);

  const mailOptions: SendMailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: "Solicitud de contacto",
    html: htmlContentAdmin({ name, phone, email, message }),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error al enviar el correo.");
    } else {
      console.log("Correo enviado: " + info.response);
      res.status(200).send("Correo enviado exitosamente.");
    }
  });

  const usermailOptions: SendMailOptions = {
    from: EMAIL,
    to: email,
    subject: "Solicitud de contacto",
    html: htmlContentUser({ name }),
  };

  transporter.sendMail(usermailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error al enviar el correo.");
    } else {
      console.log("Correo enviado: " + info.response);
      res.status(200).send("Correo enviado exitosamente al usuario.");
    }
  });
};
