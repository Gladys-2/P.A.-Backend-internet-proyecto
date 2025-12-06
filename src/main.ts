import "reflect-metadata"; 
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./config/basedatos";

import authRoutes from "./modulos/usuarios/rutas/auth.routes";
import usuariosRoutes from "./modulos/usuarios/rutas/usuarios.routes";
import usuarioRolRoutes from "./modulos/usuarios/rutas/usuarioRol.routes";
import animalesRoutes from "./modulos/animales/rutas/animales.routes";
import adopcionesRoutes from "./modulos/adopciones/rutas/adopciones.routes";
import voluntariosRoutes from "./modulos/voluntarios/rutas/voluntarios.routes";
import donacionesRoutes from "./modulos/donaciones/rutas/donaciones.routes";
import refugiosRoutes from "./modulos/refugios/rutas/refugios.routes";
import testRoutes from "./modulos/usuarios/rutas/test.routes";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"], 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/usuario-rol", usuarioRolRoutes);
app.use("/api/animales", animalesRoutes);
app.use("/api/adopciones", adopcionesRoutes);
app.use("/api/voluntarios", voluntariosRoutes);
app.use("/api/donaciones", donacionesRoutes);
app.use("/api/refugios", refugiosRoutes);
app.use("/api/test", testRoutes);
app.get("/", (_req: Request, res: Response) => {
  res.send("la api funcionando corectamente de animales :)");
});

app.use(
  (err: Error & { status?: number }, _req: Request, res: Response, _next: NextFunction) => {
    console.error("Error global:", err.stack);
    res.status(err.status ?? 500).json({
      message: err.message || "Error interno del servidor",
    });
  }
);


const init = async () => {
  try {
    await AppDataSource.initialize();
    console.log("la base de datos fue conectado correctamente");

    app.listen(PORT, () => {
      console.log(` http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("surgio un error al conectar con la base de datos", error);
  }
};

init();