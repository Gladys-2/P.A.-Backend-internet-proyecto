import { Router } from "express";
import {
  crearVoluntarioController,
  obtenerVoluntariosController,
  actualizarVoluntarioController,
  eliminarVoluntarioController,
} from "../controladores/voluntarios.controller";

const router = Router();

router.post("/crear-voluntario", crearVoluntarioController);
router.get("/listar-voluntarios", obtenerVoluntariosController);
router.put("/actualizar-voluntario/:id", actualizarVoluntarioController);
router.delete("/eliminar-voluntario/:id", eliminarVoluntarioController);

export default router;