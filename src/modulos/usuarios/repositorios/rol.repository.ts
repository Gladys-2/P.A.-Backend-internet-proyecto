import { AppDataSource } from "../../../config/basedatos";
import { Rol } from "../entidades/rol.entity";

export const RolRepository = AppDataSource.getRepository(Rol).extend({

  async buscarPorNombre(nombre: string) {
    return await this.findOne({
      where: { nombre }
    });
  },

  async listarRoles() {
    return await this.find();
  },

  async buscarPorId(id: number) {
    return await this.findOne({
      where: { id }
    });
  }
}); //rol repository..