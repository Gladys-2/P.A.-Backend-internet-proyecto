import { Request, Response } from "express";
import { VoluntariosService } from "../servicios/voluntarios.service";
import { CrearVoluntarioDTO } from "../DTOS/crear/crearVoluntario.dto";

const service = new VoluntariosService();

export const crearVoluntarioController = async (req: Request, res: Response) => {
  const data: CrearVoluntarioDTO = req.body;
  const voluntario = await service.crear(data);
  res.json({ message: "Voluntario creado exitosamente", data: voluntario });
};

export const obtenerVoluntariosController = async (_req: Request, res: Response) => {
  const voluntarios = await service.listar();
  res.json({ data: voluntarios });
};

export const actualizarVoluntarioController = async (req: Request, res: Response) => {
  const voluntario = await service.actualizar(Number(req.params.id), req.body);
  res.json({ message: "Voluntario actualizado", data: voluntario });
};

export const eliminarVoluntarioController = async (req: Request, res: Response) => {
  const resultado = await service.eliminar(Number(req.params.id));
  res.json({ message: "Voluntario eliminado", data: resultado });
};