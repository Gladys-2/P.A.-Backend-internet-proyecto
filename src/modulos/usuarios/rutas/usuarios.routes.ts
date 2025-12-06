import { Router } from "express";
import {
  crearUsuarioController,
  obtenerUsuariosController,
  obtenerUsuarioPorIdController,
  actualizarUsuarioController,
  eliminarUsuarioController,
} from "../controladores/usuarios.controller";

import { authenticateJWT, esAdmin } from "../../../core/middleware/auth.middleware";

const router = Router();

// Registro (no necesita token)
router.post("/registro", crearUsuarioController);

// Rutas protegidas
router.get("/", authenticateJWT, esAdmin, obtenerUsuariosController);
router.get("/:id", authenticateJWT, esAdmin, obtenerUsuarioPorIdController);
router.put("/:id", authenticateJWT, esAdmin, actualizarUsuarioController);
router.delete("/:id", authenticateJWT, esAdmin, eliminarUsuarioController);

export default router;