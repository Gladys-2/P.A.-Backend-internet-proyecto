import { Router } from "express";
import {
  crearUsuarioController,
  obtenerUsuariosController,
  obtenerUsuarioPorIdController,
  actualizarUsuarioController,
  eliminarUsuarioController,
} from "../controladores/usuarios.controller"
const router = Router();

router.post("/crear-usuario", crearUsuarioController);
router.get("/", obtenerUsuariosController);
router.get("/:id", obtenerUsuarioPorIdController);
router.put("/actualizar-usuario/:id", actualizarUsuarioController);
router.delete("/eliminar-usuario/:id", eliminarUsuarioController);

export default router; //rutas de usuario