import { Request, Response } from "express";
import { RolesService } from "../servicios/roles.service";
import { CrearRolDTO } from "../DTOS/crear/crearRol.dto";

const service = new RolesService();

export const crearRolController = async (req: Request, res: Response) => {
  const data: CrearRolDTO = req.body;
  const rol = await service.crearRol(data);
  res.json({ message: "Rol creado", data: rol });
};

export const obtenerRolesController = async (_req: Request, res: Response) => {
  const roles = await service.obtenerRoles();
  res.json({ data: roles });
};

export const actualizarRolController = async (req: Request, res: Response) => {
  const rol = await service.actualizarRol(Number(req.params.id), req.body);
  res.json({ message: "Rol actualizado", data: rol });
};

export const eliminarRolController = async (req: Request, res: Response) => {
  const resultado = await service.eliminarRol(Number(req.params.id));
  res.json({ message: "Rol eliminado", data: resultado });
}; //controlador de roles