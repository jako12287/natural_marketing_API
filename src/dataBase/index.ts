import mongoose from "mongoose";
import { URI_DB } from "../config";

const URI = URI_DB
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
