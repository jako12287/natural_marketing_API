API for Marketplace
This API provides functionalities for a Marketplace, including the management of offers, products, FAQs, and administrator authentication.

Endpoints
Authentication
POST /api/auth/login

Log in as an administrator to obtain an access token.
POST /api/auth/register

Register a new administrator in the system.
Offers
GET /api/offers

Get a list of all available offers.
GET /api/offers/:id

Get the details of a specific offer based on its ID.
Products
GET /api/products

Get a list of all available products.
GET /api/products/:id

Get the details of a specific product based on its ID.
POST /api/products

Create a new product (requires administrator authentication).
PUT /api/products/:id

Update an existing product based on its ID (requires administrator authentication).
DELETE /api/products/:id

Delete an existing product based on its ID (requires administrator authentication).
FAQs
GET /api/faqs

Get a list of all FAQs.
GET /api/faqs/:id

Get the details of a specific FAQ based on its ID.
POST /api/faqs

Create a new FAQ (requires administrator authentication).
PUT /api/faqs/:id

Update an existing FAQ based on its ID (requires administrator authentication).
DELETE /api/faqs/:id

Delete an existing FAQ based on its ID (requires administrator authentication).
Authentication
Authentication is performed by sending an access token in the authorization header (Authorization: Bearer <token>).

Database
This API uses a MongoDB database to store product, offer, and FAQ data. The connection to the database is made through MongoDB Atlas.

Requirements
To run this API locally, the following dependencies are required:

Node.js
Express
MongoDB Atlas
Configuration
Before starting the API, make sure to configure the following environment variables:

MONGO_URI: The connection URI for your MongoDB Atlas database.
JWT_SECRET: A secret key for signing and verifying access tokens.
Execution
Clone this repository: git clone <repository>
Install the dependencies: npm install
Configure the environment variables.
Start the server: npm start
Contribution
If you want to contribute to this project, feel free to submit pull requests or open issues in the repository.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

API para Marketplace
Esta API proporciona funcionalidades para un Marketplace, incluyendo la gestión de ofertas, productos, preguntas frecuentes y autenticación de administradores.

Endpoints
Autenticación
POST /api/auth/login

Inicia sesión como administrador para obtener un token de acceso.
POST /api/auth/register

Registra un nuevo administrador en el sistema.
Ofertas
GET /api/offers

Obtiene una lista de todas las ofertas disponibles.
GET /api/offers/:id

Obtiene los detalles de una oferta específica según su ID.
Productos
GET /api/products

Obtiene una lista de todos los productos disponibles.
GET /api/products/:id

Obtiene los detalles de un producto específico según su ID.
POST /api/products

Crea un nuevo producto (requiere autenticación de administrador).
PUT /api/products/:id

Actualiza un producto existente según su ID (requiere autenticación de administrador).
DELETE /api/products/:id

Elimina un producto existente según su ID (requiere autenticación de administrador).
Preguntas frecuentes
GET /api/faqs

Obtiene una lista de todas las preguntas frecuentes.
GET /api/faqs/:id

Obtiene los detalles de una pregunta frecuente específica según su ID.
POST /api/faqs

Crea una nueva pregunta frecuente (requiere autenticación de administrador).
PUT /api/faqs/:id

Actualiza una pregunta frecuente existente según su ID (requiere autenticación de administrador).
DELETE /api/faqs/:id

Elimina una pregunta frecuente existente según su ID (requiere autenticación de administrador).
Autenticación
La autenticación se realiza a través del envío de un token de acceso en el encabezado de autorización (Authorization: Bearer <token>).

Base de datos
Esta API utiliza una base de datos MongoDB para almacenar los datos de los productos, ofertas y preguntas frecuentes. La conexión a la base de datos se realiza a través de MongoDB Atlas.

Requisitos
Para ejecutar esta API localmente, se requieren las siguientes dependencias:

Node.js
Express
MongoDB Atlas
Configuración
Antes de iniciar la API, asegúrate de configurar las siguientes variables de entorno:

MONGO_URI: La URI de conexión a tu base de datos MongoDB Atlas.
JWT_SECRET: Una clave secreta para firmar y verificar los tokens de acceso.
Ejecución
Clona este repositorio: git clone <repositorio>
Instala las dependencias: npm install
Configura las variables de entorno.
Inicia el servidor: npm start
Contribución
Si deseas contribuir a este proyecto, siéntete libre de enviar pull requests o abrir issues en el repositorio.
