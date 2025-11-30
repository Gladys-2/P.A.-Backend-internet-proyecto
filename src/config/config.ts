import dotenv from "dotenv"; //variable de entorno de dotenv desde archivo .env
dotenv.config(); //lee el archivo .env
export const config = {
  app: {
    port: process.env.PUERTO || 5000,
  },
  db: {
    host: process.env.BD_HOST,
    port: 5432, 
    username: process.env.BD_USUARIO,
    password: process.env.BD_CONTRASENA,
    database: process.env.BD_NOMBRE,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "miclave123", //clave secreta para generar tokens JWT, usados para autenticación y seguridad.
  },
};