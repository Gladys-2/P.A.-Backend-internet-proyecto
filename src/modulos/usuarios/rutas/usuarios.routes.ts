import { Router } from "express";
import {
  crearUsuarioController,
  obtenerUsuariosController,
  obtenerUsuarioPorIdController,
  actualizarUsuarioController,
  eliminarUsuarioController,
} from "../controladores/usuarios.controller";

const router = Router();

router.post("/registro", crearUsuarioController);
router.get("/", obtenerUsuariosController);
router.get("/:id", obtenerUsuarioPorIdController);
router.put("/:id", actualizarUsuarioController);
router.delete("/:id", eliminarUsuarioController);

export default router;
