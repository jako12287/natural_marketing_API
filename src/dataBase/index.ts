import mongoose from "mongoose";

const URI =
  "mongodb+srv://johandev:johancortes@cluster0.tku5o.mongodb.net/natural_BD?retryWrites=true&w=majority";

const conectDB = async () => {
  try {
    await mongoose.connect(URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a la base de datos de MongoDB Atlas");
  } catch (error) {
    console.log(error);
    console.error(
      "Error al conectar a la base de datos de MongoDB Atlas",
      error
    );
  }
};

export default conectDB;
