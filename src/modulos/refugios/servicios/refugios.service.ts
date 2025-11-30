import { refugiosRepository } from "../repositorios/refugios.repository";
import { CrearRefugioDTO } from "../DTOS/crear/crearRefugio.dto";
import { ActualizarRefugioDTO } from "../DTOS/actualizar/actualizarRefugio.dto";
import { FiltrarRefugioDTO } from "../DTOS/filtro/filtrarRefugio.dto";

export class RefugiosService {
  async crearRefugio(data: CrearRefugioDTO) {
    const refugio = refugiosRepository.create(data);
    return await refugiosRepository.save(refugio);
  }

  async obtenerRefugios(filtros?: FiltrarRefugioDTO) {
    const where: any = {};
    if (filtros?.ciudad) where.ciudad = filtros.ciudad;
    if (filtros?.departamento) where.departamento = filtros.departamento;
    if (filtros?.estado) where.estado = filtros.estado;

    return await refugiosRepository.find({ where });
  }

  async actualizarRefugio(id: number, data: ActualizarRefugioDTO) {
    await refugiosRepository.update(id, data);
    return await refugiosRepository.findOneBy({ id });
  }

  async eliminarRefugio(id: number) {
    const refugio = await refugiosRepository.findOneBy({ id });
    if (!refugio) throw new Error("Refugio no encontrado");
    await refugiosRepository.delete(id);
    return refugio;
  }
}