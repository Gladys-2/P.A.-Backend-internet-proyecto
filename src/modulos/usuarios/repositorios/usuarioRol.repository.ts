import { AppDataSource } from "../../../config/basedatos";
import { UsuarioRol } from "../entidades/usuarioRol.entity";

export const UsuarioRolRepository = AppDataSource.getRepository(UsuarioRol).extend({

  async listarAsignaciones() {
    return await this.find({
      relations: ["usuario", "rol"]
    });
  },

  async buscarAsignacion(usuario_id: number, rol_id: number) {
    return await this.findOne({
      where: {
        usuario: { id: usuario_id },
        rol: { id: rol_id }
      },
      relations: ["usuario", "rol"]
    });
  }
});