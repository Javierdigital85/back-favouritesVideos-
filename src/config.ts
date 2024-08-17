import dotenv from "dotenv";
dotenv.config();
console.log(process.env.HELLO);
export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "videos-database", // Nombre de la base de datos
  MONGO_USER: process.env.MONGO_USER || "hola", // Usuario de MongoDB
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "holapassword", // Contraseña de MongoDB
  MONGO_HOST: process.env.MONGO_HOST || "localhost", // Host de MongoDB
  MONGO_PORT: process.env.MONGO_PORT || 27017, // Puerto de MongoDB
  PORT: process.env.PORT || 3000,
};
/*

MONGO_USER=admin
MONGO_PASSWORD=adminpassword
MONGO_HOST=localhost
MONGO_PORT=27017
MONGO_DB_NAME=videos-db
PORT=4000
*/