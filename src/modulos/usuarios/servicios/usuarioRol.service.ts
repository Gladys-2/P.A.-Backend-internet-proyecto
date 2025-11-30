import { AppDataSource } from "../../../config/basedatos";
import { UsuarioRol } from "../entidades/usuarioRol.entity";
import { AsignarUsuarioRolDTO } from "../DTOS/asignar/asignarUsuarioRol.dto";
import { Usuario } from "../entidades/usuario.entity";
import { Rol } from "../entidades/rol.entity";

export class UsuarioRolService {
  private repo = AppDataSource.getRepository(UsuarioRol);
  private usuarioRepo = AppDataSource.getRepository(Usuario);
  private rolRepo = AppDataSource.getRepository(Rol);

  async asignar(data: AsignarUsuarioRolDTO) {
    const usuario = await this.usuarioRepo.findOne({ where: { id: data.usuario_id } });
    const rol = await this.rolRepo.findOne({ where: { id: data.rol_id } });

    if (!usuario || !rol) {
      throw new Error("Usuario o Rol no encontrado");
    }

    const asignacion = this.repo.create({
      usuario,
      rol
    });

    return await this.repo.save(asignacion);
  }

  async listar() {
    return await this.repo.find({
      relations: ["usuario", "rol"]
    });
  }

  async eliminar(id: number) {
    return await this.repo.delete(id);
  }
} //servicio de usuarioRol..