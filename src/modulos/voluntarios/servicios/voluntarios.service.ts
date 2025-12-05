import { voluntarioRepository } from "../repositorios/voluntarios.repository";
import { CrearVoluntarioDTO } from "../DTOS/crear/crearVoluntario.dto";
import { ActualizarVoluntarioDTO } from "../DTOS/actualizar/actualizarVoluntario.dto";
import { Voluntario } from "../entidades/voluntario.entity";

export class VoluntariosService {
  async crear(data: CrearVoluntarioDTO) {
    const voluntario = voluntarioRepository.create(data);
    return await voluntarioRepository.save(voluntario);
  }

  async listar(): Promise<Voluntario[]> {
    return await voluntarioRepository.find();
  }

  async actualizar(id: number, data: ActualizarVoluntarioDTO) {
    await voluntarioRepository.update(id, data);
    return await voluntarioRepository.findOneBy({ id });
  }

  async eliminar(id: number) {
    const voluntario = await voluntarioRepository.findOneBy({ id });
    if (voluntario) {
      await voluntarioRepository.remove(voluntario);
      return true;
    }
    return false;
  }
}