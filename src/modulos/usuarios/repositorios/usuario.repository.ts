import { AppDataSource } from "../../../config/basedatos";
import { Usuario } from "../entidades/usuario.entity";

export const UsuarioRepository = AppDataSource.getRepository(Usuario).extend({
  
  async buscarPorCorreo(correo_electronico: string) {
    return await this.findOne({
      where: { correo_electronico },
      select: ["id", "correo_electronico", "contrasena", "rol", "estado"]
    });
  },

  async listarUsuarios() {
    return await this.find({
      relations: ["rolesAsignados", "rolesAsignados.rol"]
    });
  },

  async buscarPorId(id: number) {
    return await this.findOne({
      where: { id },
      relations: ["rolesAsignados", "rolesAsignados.rol"]
    });
  }
}); //usuario.repository