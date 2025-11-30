import { Request, Response } from "express";
import { DonacionesService } from "../servicios/donaciones.service";
import { CrearDonacionDTO } from "../DTOS/crear/crearDonacion.dto";
import { ActualizarDonacionDTO } from "../DTOS/actualizar/actualizarDonacion.dto";
import { FiltrarDonacionDTO } from "../DTOS/filtro/filtrarDonacion.dto";

const service = new DonacionesService();

export const crearDonacionController = async (req: Request, res: Response) => {
  const data: CrearDonacionDTO = req.body;
  const donacion = await service.crearDonacion(data);
  res.json({ message: "Donación fue creada con exito", data: donacion });
};

export const obtenerDonacionesController = async (req: Request, res: Response) => {
  const filtros: FiltrarDonacionDTO = req.query;
  const donaciones = await service.obtenerDonaciones(filtros);
  res.json({ data: donaciones });
};

export const actualizarDonacionController = async (req: Request, res: Response) => {
  const data: ActualizarDonacionDTO = req.body;
  const donacion = await service.actualizarDonacion(Number(req.params.id), data);
  res.json({ message: "Donación actualizada", data: donacion });
};

export const eliminarDonacionController = async (req: Request, res: Response) => {
  const donacion = await service.eliminarDonacion(Number(req.params.id));
  res.json({ message: "la donación fue eliminada", data: donacion });
};