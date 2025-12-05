import { Router } from "express";
import {
  crearDonacionController,
  obtenerDonacionesController,
  actualizarDonacionController,
  eliminarDonacionController
} from "../controladores/donaciones.controller";

const router = Router();
router.post("/crear-donacion", crearDonacionController);
router.get("/", obtenerDonacionesController);
router.put("/actualizar-donacion/:id", actualizarDonacionController);
router.delete("/eliminar-donacion/:id", eliminarDonacionController);
 
export default router; //rutas de donaciones