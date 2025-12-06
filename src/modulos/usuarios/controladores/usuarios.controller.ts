import { Request, Response } from "express";
import { UsuariosService } from "../servicios/usuarios.service";
import { CrearUsuarioDTO } from "../DTOS/crear/crearUsuario.dto";
import { ActualizarUsuarioDTO } from "../DTOS/actualizar/actualizarUsuario.dto";

const esAdmin = (req: Request, res: Response, next: Function) => {
  const user = (req as any).user;
  if (!user || user.rol !== "administrador") {
    return res.status(403).json({ mensaje: "Acceso denegado, solo administradores" });
  }
  next();
};

export const crearUsuarioController = async (req: Request, res: Response) => {
  try {
    const data: CrearUsuarioDTO = req.body;
    const usuario = await UsuariosService.crearUsuario(data);
    return res.status(201).json({ mensaje: "Usuario creado correctamente", data: usuario });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const obtenerUsuariosController = [
  esAdmin,
  async (_req: Request, res: Response) => {
    try {
      const usuarios = await UsuariosService.obtenerUsuarios();
      return res.json(usuarios);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  },
];

export const obtenerUsuarioPorIdController = [
  esAdmin,
  async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const usuario = await UsuariosService.obtenerUsuarioPorId(id);
      return res.json(usuario);
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  },
];

export const actualizarUsuarioController = [
  esAdmin,
  async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data: ActualizarUsuarioDTO = req.body;
      const usuarioActualizado = await UsuariosService.actualizarUsuario(id, data);
      return res.json({ mensaje: "Usuario actualizado correctamente", data: usuarioActualizado });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  },
];

export const eliminarUsuarioController = [
  esAdmin,
  async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      await UsuariosService.eliminarUsuario(id);
      return res.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  },
];