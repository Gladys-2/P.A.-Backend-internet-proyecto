import { Request, Response } from "express";
import { AnimalesService } from "../servicios/animales.service";
import { CrearAnimalDTO } from "../DTOS/crear/crearAnimal.dto";
import { ActualizarAnimalDTO } from "../DTOS/actualizar/actualizarAnimal.dto";
import { FiltrarAnimalDTO } from "../DTOS/filtro/filtrarAnimal.dto";

const service = new AnimalesService();

export const crearAnimalController = async (req: Request, res: Response) => {
  const data: CrearAnimalDTO = req.body;
  const animal = await service.crearAnimal(data);
  res.json({ message: "El animal fue creado con exito..", data: animal });
};

export const obtenerAnimalesController = async (req: Request, res: Response) => {
  const filtros: FiltrarAnimalDTO = req.query;
  const animales = await service.obtenerAnimales(filtros);
  res.json({ data: animales });
};

export const actualizarAnimalController = async (req: Request, res: Response) => {
  const data: ActualizarAnimalDTO = req.body;
  const animal = await service.actualizarAnimal(Number(req.params.id), data);
  res.json({ message: "Actualizacion del animal", data: animal });
};

export const eliminarAnimalController = async (req: Request, res: Response) => {
  const animal = await service.eliminarAnimal(Number(req.params.id));
  res.json({ message: "el animal fue eliminado", data: animal });
};