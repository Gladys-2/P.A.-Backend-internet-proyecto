import { AppDataSource } from "../../../config/basedatos";
import { Usuario } from "../entidades/usuario.entity";
import { CrearUsuarioDTO } from "../DTOS/crear/crearUsuario.dto";
import { ActualizarUsuarioDTO } from "../DTOS/actualizar/actualizarUsuario.dto";

export class UsuariosService {
  private static repo = AppDataSource.getRepository(Usuario);

  // Crear usuario
  static async crearUsuario(data: CrearUsuarioDTO) {
    const usuario = this.repo.create(data);
    return await this.repo.save(usuario);
  }

  // Listar usuarios
  static async obtenerUsuarios() {
    return await this.repo.find({
      relations: ["rolesAsignados", "rolesAsignados.rol"],
    });
  }

  // Obtener usuario por ID
  static async obtenerUsuarioPorId(id: number) {
    const usuario = await this.repo.findOne({
      where: { id },
      relations: ["rolesAsignados", "rolesAsignados.rol"],
    });

    if (!usuario) {
      throw new Error("Usuario no encontrado");
    }
    return usuario;
  }

  // Actualizar usuario
  static async actualizarUsuario(id: number, data: ActualizarUsuarioDTO) {
    await this.repo.update(id, data);
    return await this.obtenerUsuarioPorId(id);
  }

  // Eliminar usuario
  static async eliminarUsuario(id: number) {
    const resultado = await this.repo.delete(id);

    if (resultado.affected === 0) {
      throw new Error("Usuario no encontrado");
    }

    return true;
  }
} //servicios de usuario...