import { Router } from "express";
import {
  crearRolController,
  obtenerRolesController,
  actualizarRolController,
  eliminarRolController,
} from "../controladores/roles.controller";

const router = Router();

// Rutas de roles
router.post("/crear-rol", crearRolController);
router.get("/listar-roles", obtenerRolesController);
router.put("/actualizar-rol/:id", actualizarRolController);
router.delete("/eliminar-rol/:id", eliminarRolController);

export default router;