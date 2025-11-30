import { Request, Response } from "express";
import { AdopcionesService } from "../servicios/adopciones.service";
import { CrearAdopcionDTO } from "../DTOS/crear/crearAdopcion.dto";
import { ActualizarAdopcionDTO } from "../DTOS/actualizar/actualizarAdopcion.dto";
import { FiltrarAdopcionDTO } from "../DTOS/filtro/filtrarAdopcion.dto";

const service = new AdopcionesService();

export const crearAdopcionController = async (req: Request, res: Response) => {
  const data: CrearAdopcionDTO = req.body;
  const adopcion = await service.crearAdopcion(data);
  res.json({ message: "Adopción creada", data: adopcion });
};

export const obtenerAdopcionesController = async (req: Request, res: Response) => {
  const filtros: FiltrarAdopcionDTO = req.query;
  const adopciones = await service.obtenerAdopciones(filtros);
  res.json({ data: adopciones });
};

export const actualizarAdopcionController = async (req: Request, res: Response) => {
  const data: ActualizarAdopcionDTO = req.body;
  const adopcion = await service.actualizarAdopcion(Number(req.params.id), data);
  res.json({ message: "Adopción actualizada", data: adopcion });
};

export const eliminarAdopcionController = async (req: Request, res: Response) => {
  const adopcion = await service.eliminarAdopcion(Number(req.params.id));
  res.json({ message: "Adopción eliminada", data: adopcion });
};