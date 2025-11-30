import { donacionesRepository } from "../repositorios/donaciones.repository";
import { CrearDonacionDTO } from "../DTOS/crear/crearDonacion.dto";
import { ActualizarDonacionDTO } from "../DTOS/actualizar/actualizarDonacion.dto";
import { FiltrarDonacionDTO } from "../DTOS/filtro/filtrarDonacion.dto";
import { Usuario } from "../../usuarios/entidades/usuario.entity";
import { AppDataSource } from "../../../config/basedatos";

export class DonacionesService {
  async crearDonacion(data: CrearDonacionDTO) {
    const usuario = await AppDataSource.getRepository(Usuario).findOneBy({ id: data.usuarioId });
    if (!usuario) throw new Error("Usuario no fue encontrado");

    const donacion = donacionesRepository.create({
      usuario,
      monto: data.monto,
      tipo: data.tipo ?? "Dinero",
      descripcion: data.descripcion
    });

    return await donacionesRepository.save(donacion);
  }

  async obtenerDonaciones(filtros?: FiltrarDonacionDTO) {
    const where: any = {};
    if (filtros?.usuarioId) where.usuario = { id: filtros.usuarioId };
    if (filtros?.tipo) where.tipo = filtros.tipo;
    if (filtros?.montoMin) where.monto = where.monto ?? {};
    if (filtros?.montoMin) where.monto = { ...where.monto, $gte: filtros.montoMin };
    if (filtros?.montoMax) where.monto = { ...where.monto, $lte: filtros.montoMax };

    return await donacionesRepository.find({ where });
  }

  async actualizarDonacion(id: number, data: ActualizarDonacionDTO) {
    await donacionesRepository.update(id, data);
    return await donacionesRepository.findOneBy({ id });
  }

  async eliminarDonacion(id: number) {
    const donacion = await donacionesRepository.findOneBy({ id });
    if (!donacion) throw new Error("Donación no fue encontrada");
    await donacionesRepository.delete(id);
    return donacion;
  }
}