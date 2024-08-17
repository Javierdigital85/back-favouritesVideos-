import mongoose from "mongoose";
import config from "./config";

const { MONGO_DATABASE, MONGO_USER, MONGO_PASSWORD, MONGO_HOST, MONGO_PORT } = config;

// Crea la URI de conexión usando las configuraciones importadas
const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

(async () => {
  try {
    const db = await mongoose.connect(mongoURI);
    console.log("database is connected", db.connection.name);
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();
