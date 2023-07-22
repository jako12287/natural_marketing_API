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

export const postSend = async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  const mailOptions: SendMailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: "Solicitud de contacto",
    html: htmlContentAdmin({ name, phone, email, message }),
  };

  const usermailOptions: SendMailOptions = {
    from: EMAIL,
    to: email,
    subject: "Solicitud de contacto",
    html: htmlContentUser({ name }),
  };

  try {
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(usermailOptions),
    ]);

    console.log("Correo enviado a administrador y usuario.");
    res.send({ message: "Correos enviados exitosamente", data: [] })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: {
        en: "Internal server error",
        es: "Error interno del servidor",
      },
      error: { error },
    });
  }

};
