import mongoose from "mongoose";


async function conectaNaDatabase() {
  mongoose.connect(process.env.DB_CONECTION_STRING);
  
  return mongoose.connection; // Não se usa await, pois return já é implicitamente assíncrono
}

export default conectaNaDatabase;
