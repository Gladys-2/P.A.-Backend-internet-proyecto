import { AppDataSource } from "../../../config/basedatos";
import { Animal } from "../entidades/animal.entity";
import { CrearAnimalDTO } from "../DTOS/crear/crearAnimal.dto";
import { ActualizarAnimalDTO } from "../DTOS/actualizar/actualizarAnimal.dto";
import { FiltrarAnimalDTO } from "../DTOS/filtro/filtrarAnimal.dto";

export class AnimalesService {
  private repo = AppDataSource.getRepository(Animal);

  async obtenerAnimales(filtros?: FiltrarAnimalDTO) {
    const query = this.repo.createQueryBuilder("animal");

    if (filtros) {
      if (filtros.nombre) query.andWhere("animal.nombre ILIKE :nombre", { nombre: `%${filtros.nombre}%` });
      if (filtros.especie) query.andWhere("animal.especie ILIKE :especie", { especie: `%${filtros.especie}%` });
      if (filtros.raza) query.andWhere("animal.raza ILIKE :raza", { raza: `%${filtros.raza}%` });
      if (filtros.estado_animal)
        query.andWhere("animal.estado_animal = :estado_animal", { estado_animal: filtros.estado_animal });
    }

    return await query.getMany();
  }

  async obtenerAnimalPorId(id: number) {
    return await this.repo.findOneBy({ id });
  }
  async crearAnimal(data: CrearAnimalDTO) {
    const animal = this.repo.create(data);
    return await this.repo.save(animal);
  }
  async actualizarAnimal(id: number, data: ActualizarAnimalDTO) {
    const animal = await this.repo.findOneBy({ id });
    if (!animal) throw new Error("Animal no encontrado");

    Object.assign(animal, data); // actualiza solo propiedades válidas
    return await this.repo.save(animal);
  }
  async toggleEstadoAnimal(id: number) {
    const animal = await this.repo.findOneBy({ id });
    if (!animal) throw new Error("Animal no encontrado");
    animal.estado_animal = animal.estado_animal === "Disponible" ? "Adoptado" : "Disponible";
    return await this.repo.save(animal);
  }
}