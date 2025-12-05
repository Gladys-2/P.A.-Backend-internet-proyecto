import { Request, Response } from "express";
import { AdopcionesService } from "../servicios/adopciones.service";
import { AppDataSource } from "../../../config/basedatos";
import { Animal } from "../../animales/entidades/animal.entity";

const adopcionesService = new AdopcionesService();

export const crearAdopcionController = async (req: Request, res: Response) => {
  try {
    const adopcion = await adopcionesService.crearAdopcion(req.body);
    res.status(201).json(adopcion);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ msg: err.message || "Error al crear adopción" });
  }
};

export const obtenerAdopcionesController = async (_req: Request, res: Response) => {
  try {
    const adopciones = await adopcionesService.obtenerAdopciones();
    res.json(adopciones);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ msg: "Error al obtener adopciones" });
  }
};

export const obtenerAdopcionesUsuarioController = async (req: Request, res: Response) => {
  const usuarioId = Number(req.params.usuarioId);
  if (!usuarioId) return res.status(400).json({ msg: "Falta el id del usuario" });

  try {
    const adopciones = await adopcionesService.obtenerAdopciones({ usuarioId });
    res.json(adopciones);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ msg: "Error al obtener adopciones del usuario" });
  }
};

export const actualizarEstadoAdopcionController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { estado, motivoRechazo } = req.body;

  try {
    const adopcion = await adopcionesService.actualizarAdopcion(Number(id), { estado, motivoRechazo });

    if (estado === "Aprobada" && adopcion?.animal?.id) {
      const animalRepo = AppDataSource.getRepository(Animal);
      const animal = await animalRepo.findOneBy({ id: adopcion.animal.id });
      if (animal) {
        animal.estado_animal = "Adoptado";
        await animalRepo.save(animal);
      }
    }

    res.json(adopcion);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ msg: "Error al actualizar adopción" });
  }
};