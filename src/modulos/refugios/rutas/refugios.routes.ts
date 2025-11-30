import { Router } from "express";
import {
  crearRefugioController,
  obtenerRefugiosController,
  actualizarRefugioController,
  eliminarRefugioController
} from "../controladores/refugios.controller";

const router = Router();

router.post("/crear-refugio", crearRefugioController);
router.get("/", obtenerRefugiosController);
router.put("/actualizar-refugio/:id", actualizarRefugioController);
router.delete("/eliminar-refugio/:id", eliminarRefugioController);

export default router;