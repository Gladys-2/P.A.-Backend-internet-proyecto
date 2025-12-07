import { Router } from "express";
import {
  crearVoluntarioController,
  obtenerVoluntariosController,
  actualizarVoluntarioController,
  eliminarVoluntarioController,
} from "../controladores/voluntarios.controller";

const router = Router();

router.post("/crear-voluntario", crearVoluntarioController);
router.get("/", obtenerVoluntariosController); // Nueva ruta simple
router.get("/listar-voluntarios", obtenerVoluntariosController); // Ruta original
router.put("/actualizar-voluntario/:id", actualizarVoluntarioController);
router.delete("/eliminar-voluntario/:id", eliminarVoluntarioController);

export default router;