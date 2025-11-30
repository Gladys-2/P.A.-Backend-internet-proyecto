// src/modulos/refugios/controladores/refugios.controller.ts
import { Request, Response } from "express";
import { RefugiosService } from "../servicios/refugios.service";
import { CrearRefugioDTO } from "../DTOS/crear/crearRefugio.dto";
import { ActualizarRefugioDTO } from "../DTOS/actualizar/actualizarRefugio.dto";
import { FiltrarRefugioDTO } from "../DTOS/filtro/filtrarRefugio.dto";

const service = new RefugiosService();

export const crearRefugioController = async (req: Request, res: Response) => {
  const data: CrearRefugioDTO = req.body;
  const refugio = await service.crearRefugio(data);
  res.json({ message: "Refugio creado", data: refugio });
};

export const obtenerRefugiosController = async (req: Request, res: Response) => {
  const filtros: FiltrarRefugioDTO = req.query;
  const refugios = await service.obtenerRefugios(filtros);
  res.json({ data: refugios });
};

export const actualizarRefugioController = async (req: Request, res: Response) => {
  const data: ActualizarRefugioDTO = req.body;
  const refugio = await service.actualizarRefugio(Number(req.params.id), data);
  res.json({ message: "Refugio actualizado", data: refugio });
};

export const eliminarRefugioController = async (req: Request, res: Response) => {
  const refugio = await service.eliminarRefugio(Number(req.params.id));
  res.json({ message: "Refugio eliminado", data: refugio });
};