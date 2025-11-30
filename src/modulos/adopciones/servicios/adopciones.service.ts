import { adopcionesRepository } from "../repositorios/adopciones.repository";
import { CrearAdopcionDTO } from "../DTOS/crear/crearAdopcion.dto";
import { ActualizarAdopcionDTO } from "../DTOS/actualizar/actualizarAdopcion.dto";
import { FiltrarAdopcionDTO } from "../DTOS/filtro/filtrarAdopcion.dto";
import { Usuario } from "../../usuarios/entidades/usuario.entity";
import { Animal } from "../../animales/entidades/animal.entity";
import { AppDataSource } from "../../../config/basedatos";

export class AdopcionesService {
  async crearAdopcion(data: CrearAdopcionDTO) {
    const usuario = await AppDataSource.getRepository(Usuario).findOneBy({ id: data.usuarioId });
    const animal = await AppDataSource.getRepository(Animal).findOneBy({ id: data.animalId });

    if (!usuario) throw new Error("Usuario no encontrado");
    if (!animal) throw new Error("Animal no encontrado");

    const adopcion = adopcionesRepository.create({
      usuario,
      animal,
      estado: "Pendiente"
    });
    return await adopcionesRepository.save(adopcion);
  }

  async obtenerAdopciones(filtros?: FiltrarAdopcionDTO) {
    const where: any = {};
    if (filtros?.usuarioId) where.usuario = { id: filtros.usuarioId };
    if (filtros?.animalId) where.animal = { id: filtros.animalId };
    if (filtros?.estado) where.estado = filtros.estado;

    return await adopcionesRepository.find({ where });
  }

  async actualizarAdopcion(id: number, data: ActualizarAdopcionDTO) {
    await adopcionesRepository.update(id, data);
    return await adopcionesRepository.findOneBy({ id });
  }

  async eliminarAdopcion(id: number) {
    const adopcion = await adopcionesRepository.findOneBy({ id });
    if (!adopcion) throw new Error("Adopción no encontrada");
    await adopcionesRepository.delete(id);
    return adopcion;
  }
}
// El servicio centraliza toda la lógica de adopciones para que los controladores solo se encarguen de recibir la petición y enviar la respuesta.