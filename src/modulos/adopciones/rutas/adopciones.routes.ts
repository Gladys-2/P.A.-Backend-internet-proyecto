import { Router } from "express";
import {
  crearAdopcionController,
  obtenerAdopcionesController,
  actualizarAdopcionController,
  eliminarAdopcionController
} from "../contoladores/adopciones.controller";

const router = Router();

router.post("/crear-adopcion", crearAdopcionController);
router.get("/", obtenerAdopcionesController);
router.put("/actualizar-adopcion/:id", actualizarAdopcionController);
router.delete("/eliminar-adopcion/:id", eliminarAdopcionController);

export default router;
// routes son caminos o direcciones que el servidor escucha para saber qué hacer cuando alguien pide algo.