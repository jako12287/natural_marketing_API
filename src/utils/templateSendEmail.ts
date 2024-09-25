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
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
  <h1 style="color: #FF6F00; text-align: center;">¡Nuevo Mensaje Recibido!</h1>
  <p style="text-align: center;">${name[0]?.toUpperCase()}${name?.slice(1, name?.length)} ha solicitado ponerse en contacto contigo. Aquí tienes los detalles completos:</p>
  <ul style="list-style: none; padding: 0; font-size: 16px;">
    <li style="margin-bottom: 10px;"><strong>Nombre:</strong> ${name[0]?.toUpperCase()}${name?.slice(1, name?.length)}</li>
    <li style="margin-bottom: 10px;"><strong>Correo Electrónico:</strong> <a href="mailto:${email}" style="color: #4A55A2; text-decoration: none;">${email}</a></li>
    <li style="margin-bottom: 10px;"><strong>Asunto:</strong> ${subjectmatter}</li>
    <li style="margin-bottom: 10px;"><strong>Mensaje:</strong> ${message}</li>
  </ul>
  <p style="text-align: center; font-size: 14px; color: #555;">Recuerda responder a este mensaje lo antes posible para no perder la oportunidad de conectar con un posible cliente.</p>
  <p style="text-align: center; font-size: 14px;">Saludos,<br><strong>El equipo de JCMaker</strong></p>
</div>

  `;
};

export const htmlContentUser = ({ name }: TemplateUserProps) => {
  return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h1 style="color: #FF6F00; text-align: center;">JCMaker</h1>
  <h2 style="color: #4A55A2; text-align: center;">¡Hola, ${name[0]?.toUpperCase()}${name?.slice(1, name?.length)}!</h2>
  <h2 style="color: #4A55A2; text-align: center;">¡Gracias por ponerte en contacto con nosotros!</h2>
  <p>En <strong>JCMaker</strong>, valoramos mucho que te hayas tomado el tiempo de escribirnos. Hemos recibido tu solicitud y nos emociona poder ayudarte.</p>
  <p>Nuestro equipo revisará tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
  <p>Si tienes más preguntas o inquietudes, no dudes en escribirnos por WhatsApp o en nuestras redes sociales. ¡Estamos aquí para ti!</p>
  <p style="text-align: center; font-weight: bold;">Gracias por confiar en <strong>JCMaker</strong>, tu aliado en soluciones de software a medida.</p>
  <p style="text-align: center;">Un cordial saludo,<br>El equipo de <strong>JCMaker</strong></p>
</div>

`;
};
