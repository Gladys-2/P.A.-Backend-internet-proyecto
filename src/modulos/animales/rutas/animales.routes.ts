import { Router } from "express";
import {
  crearAnimalController,
  obtenerAnimalesController,
  actualizarAnimalController,
  eliminarAnimalController
} from "../controladores/animales.controller";

const router = Router();

router.post("/crear-animal", crearAnimalController);
router.get("/", obtenerAnimalesController);
router.put("/actualizar-animal/:id", actualizarAnimalController);
router.delete("/eliminar-animal/:id", eliminarAnimalController);

export default router;
//rutas de animales