import { AppDataSource } from "../../../config/basedatos";
import { Rol } from "../entidades/rol.entity";
import { CrearRolDTO } from "../DTOS/crear/crearRol.dto";

export class RolesService {
  private repo = AppDataSource.getRepository(Rol);

  async crearRol(data: CrearRolDTO) {
    const rol = this.repo.create(data);
    return await this.repo.save(rol);
  }

  async obtenerRoles() {
    return await this.repo.find();
  }

  async actualizarRol(id: number, data: Partial<CrearRolDTO>) {
    await this.repo.update(id, data);
    return await this.repo.findOneBy({ id });
  }

  async eliminarRol(id: number) {
    const rol = await this.repo.findOneBy({ id });
    if (!rol) throw new Error("Rol no encontrado");
    return await this.repo.remove(rol);
  }
}