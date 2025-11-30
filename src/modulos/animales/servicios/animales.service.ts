import { animalesRepository } from "../repositorios/animales.repository";
import { CrearAnimalDTO } from "../DTOS/crear/crearAnimal.dto";
import { ActualizarAnimalDTO } from "../DTOS/actualizar/actualizarAnimal.dto";
import { FiltrarAnimalDTO } from "../DTOS/filtro/filtrarAnimal.dto";

export class AnimalesService {
  async crearAnimal(data: CrearAnimalDTO) {
    const animal = animalesRepository.create(data);
    return await animalesRepository.save(animal);
  }

  async obtenerAnimales(filtros?: FiltrarAnimalDTO) {
    return await animalesRepository.find({ where: filtros });
  }

  async actualizarAnimal(id: number, data: ActualizarAnimalDTO) {
    await animalesRepository.update(id, data);
    return await animalesRepository.findOneBy({ id });
  }

  async eliminarAnimal(id: number) {
    const animal = await animalesRepository.findOneBy({ id });
    if (!animal) throw new Error("Animal no encontrado");
    await animalesRepository.delete(id);
    return animal;
  }
}