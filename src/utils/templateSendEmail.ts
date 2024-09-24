type TemplateAdminProps = {
  name: string;
  email: string;
  subjectmatter: string;
  message: string;
};

type TemplateUserProps = {
  name: string;
};

export const htmlContentAdmin = ({
  name,
  subjectmatter,
  email,
  message,
}: TemplateAdminProps) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #ff7f50; text-align: center;">Hola Johan</h1>
      <p style="text-align: center;">${name} necesita comunicarse contigo. A continuación te proporciono los datos completos:</p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px;"><strong>Nombre:</strong> ${name}</li>
        <li style="margin-bottom: 10px;"><strong>Correo:</strong> ${email}</li>
        <li style="margin-bottom: 10px;"><strong>Phone:</strong> ${subjectmatter}</li>
        <li style="margin-bottom: 10px;"><strong>Mensaje:</strong> ${message}</li>
      </ul>
    </div>
  `;
};

export const htmlContentUser = ({ name }: TemplateUserProps) => {
  return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h1 style="color: #00BE00; text-align: center;">JCMaker</h1>
    <h2 style="color: #4A55A2; text-align: center;">Hola ${name}</h2>
    <h2 style="color: #4A55A2; text-align: center;">¡Gracias por contactarnos!</h2>
    <p style="text-align: center;">Hemos recibido tu solicitud de contacto y es siempre importante para JCMaker saber de ti.</p>
    <p style="text-align: center;">Nos pondremos en contacto contigo lo más pronto posible.</p>
    <p style="text-align: center;">Mientras tanto, si tienes alguna otra pregunta, no dudes en contactarnos via whatsapp o por nuestra redes sociales.</p>
    <p style="text-align: center;">¡Gracias por elegirnos!</p>
    <p style="text-align: center;">Saludos cordiales,<br>Atentamente JCMaker</p>
  </div>
`;
};
