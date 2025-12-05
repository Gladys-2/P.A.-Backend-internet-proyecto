import { Request, Response } from "express";
import { AnimalesService } from "../servicios/animales.service";
import { CrearAnimalDTO } from "../DTOS/crear/crearAnimal.dto";
import { ActualizarAnimalDTO } from "../DTOS/actualizar/actualizarAnimal.dto";
import { FiltrarAnimalDTO } from "../DTOS/filtro/filtrarAnimal.dto";

const service = new AnimalesService();

export const obtenerAnimales = async (req: Request, res: Response) => {
  const filtros: FiltrarAnimalDTO = req.query;
  const animales = await service.obtenerAnimales(filtros);
  res.json(animales);
};

export const obtenerAnimalPorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const animal = await service.obtenerAnimalPorId(id);
  res.json(animal);
};

export const crearAnimal = async (req: Request, res: Response) => {
  const data: CrearAnimalDTO = req.body;
  const animal = await service.crearAnimal(data);
  res.json({ message: "Animal creado con éxito", data: animal });
};

export const actualizarAnimal = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data: ActualizarAnimalDTO = req.body;
  const animal = await service.actualizarAnimal(id, data);
  res.json({ message: "Animal actualizado", data: animal });
};

export const toggleEstadoAnimal = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const animal = await service.toggleEstadoAnimal(id);
  res.json({ message: "Estado del animal actualizado", data: animal });
};