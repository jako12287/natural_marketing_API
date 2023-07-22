type TemplateAdminProps = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type TemplateUserProps = {
  name: string;
};

export const htmlContentAdmin = ({
  name,
  phone,
  email,
  message,
}: TemplateAdminProps) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #ff7f50; text-align: center;">Hola Angelica</h1>
      <p style="text-align: center;">${name} necesita comunicarse contigo. A continuación te proporciono los datos completos:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;"><strong>Nombre:</strong> ${name}</li>
        <li style="margin-bottom: 10px;"><strong>Correo:</strong> ${email}</li>
        <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</li>
        <li style="margin-bottom: 10px;"><strong>Mensaje:</strong> ${message}</li>
      </ul>
      <p style="text-align: center;">Recuerda responder lo antes posible, ya que puede ser un cliente potencial.</p>
      <p style="text-align: center;">Saludos cordiales,<br>Atentamente tu equipo de desarrollo JohanDev</p>
    </div>
  `;
};

export const htmlContentUser = ({ name }: TemplateUserProps) => {
  return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h1 style="color: #00BE00; text-align: center;">Natural Marketing</h1>
    <h2 style="color: #4A55A2; text-align: center;">Hola ${name}</h2>
    <h2 style="color: #4A55A2; text-align: center;">¡Gracias por contactarnos!</h2>
    <p style="text-align: center;">Hemos recibido tu solicitud de contacto y es siempre importante para Natural Marketing saber de ti.</p>
    <p style="text-align: center;">Nos pondremos en contacto contigo lo más pronto posible.</p>
    <p style="text-align: center;">Mientras tanto, si tienes alguna otra pregunta, no dudes en contactarnos via whatsapp o por nuestra redes sociales.</p>
    <p style="text-align: center;">¡Gracias por elegirnos!</p>
    <p style="text-align: center;">Saludos cordiales,<br>Atentamente Natural Marketing</p>
  </div>
`;
};
