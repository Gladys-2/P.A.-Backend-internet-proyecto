import { AppDataSource } from "../../../config/basedatos";
import { Adopcion } from "../entidades/adopcion.entity";
import { Usuario } from "../../usuarios/entidades/usuario.entity";
import { Animal } from "../../animales/entidades/animal.entity";
import { CrearAdopcionDTO } from "../DTOS/crear/crearAdopcion.dto";
import { ActualizarAdopcionDTO } from "../DTOS/actualizar/actualizarAdopcion.dto";
import { FiltrarAdopcionDTO } from "../DTOS/filtro/filtrarAdopcion.dto";

export class AdopcionesService {
  private adopcionesRepo = AppDataSource.getRepository(Adopcion);

  // Crear adopción con validación de 1 adopción activa por usuario
  async crearAdopcion(data: CrearAdopcionDTO) {
    const usuario = await AppDataSource.getRepository(Usuario).findOneBy({ id: data.usuarioId });
    const animal = await AppDataSource.getRepository(Animal).findOneBy({ id: data.animalId });

    if (!usuario) throw new Error("Usuario no encontrado");
    if (!animal) throw new Error("Animal no encontrado");

    // ✅ Validar adopción activa
    const adopcionesActivas = await this.adopcionesRepo.find({
      where: [
        { usuario: { id: usuario.id }, estado: "Pendiente" },
        { usuario: { id: usuario.id }, estado: "Aprobada" }
      ]
    });

    if (adopcionesActivas.length > 0) {
      throw new Error("Solo puedes tener una adopción activa");
    }

    const adopcion = this.adopcionesRepo.create({
      usuario,
      animal,
      estado: "Pendiente",
      comentarios: data.comentarios || null,
      fechaSolicitud: new Date(),
    });

    return await this.adopcionesRepo.save(adopcion);
  }

  async obtenerAdopciones(filtros?: FiltrarAdopcionDTO) {
    const where: any = {};
    if (filtros?.usuarioId) where.usuario = { id: filtros.usuarioId };
    if (filtros?.animalId) where.animal = { id: filtros.animalId };
    if (filtros?.estado) where.estado = filtros.estado;

    return await this.adopcionesRepo.find({
      where,
      relations: ["usuario", "animal"],
      order: { fechaSolicitud: "DESC" },
    });
  }

  async actualizarAdopcion(id: number, data: ActualizarAdopcionDTO) {
    await this.adopcionesRepo.update(id, data);
    return await this.adopcionesRepo.findOne({
      where: { id },
      relations: ["usuario", "animal"],
    });
  }

  async eliminarAdopcion(id: number) {
    const adopcion = await this.adopcionesRepo.findOneBy({ id });
    if (!adopcion) throw new Error("Adopción no encontrada");
    await this.adopcionesRepo.delete(id);
    return adopcion;
  }
}