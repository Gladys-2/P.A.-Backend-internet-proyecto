import { Router } from "express";
import {
  crearAdopcionController,
  obtenerAdopcionesController,
  obtenerAdopcionesUsuarioController,
  actualizarEstadoAdopcionController
} from "../contoladores/adopciones.controller";

const router = Router();

router.post("/crear-adopcion", crearAdopcionController);
router.get("/", obtenerAdopcionesController);
router.get("/usuario/:usuarioId", obtenerAdopcionesUsuarioController);
router.put("/actualizar-estado/:id", actualizarEstadoAdopcionController);

export default router;