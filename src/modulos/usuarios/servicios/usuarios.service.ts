import { AppDataSource } from "../../../config/basedatos";
import { Usuario } from "../entidades/usuario.entity";
import { CrearUsuarioDTO } from "../DTOS/crear/crearUsuario.dto";
import { ActualizarUsuarioDTO } from "../DTOS/actualizar/actualizarUsuario.dto";

export class UsuariosService {
  private static repo = AppDataSource.getRepository(Usuario);

  static async crearUsuario(data: CrearUsuarioDTO) {
    const usuarioData: Partial<Usuario> = {
      nombre: data.nombre,
      apellido_paterno: data.apellido_paterno,
      apellido_materno: data.apellido_materno,
      cedula_identidad: data.cedula_identidad,
      telefono: data.telefono,
      correo_electronico: data.correo_electronico,
      contrasena: data.contrasena,
      rol: (data.rol as "usuario" | "administrador") || "usuario",
      estado: (data.estado as "Activo" | "Inactivo") || "Activo",
      genero: (data.genero as "M" | "F" | "O") || "M",
    };

    const usuario = this.repo.create(usuarioData);
    return await this.repo.save(usuario);
  }

  static async obtenerUsuarios() {
    return await this.repo.find({
      relations: ["rolesAsignados", "rolesAsignados.rol"],
    });
  }

  static async obtenerUsuarioPorId(id: number) {
    const usuario = await this.repo.findOne({
      where: { id },
      relations: ["rolesAsignados", "rolesAsignados.rol"],
    });

    if (!usuario) throw new Error("Usuario no encontrado");
    return usuario;
  }

  static async actualizarUsuario(id: number, data: ActualizarUsuarioDTO) {
    await this.repo.update(id, data);
    return await this.obtenerUsuarioPorId(id);
  }

  static async eliminarUsuario(id: number) {
    const resultado = await this.repo.delete(id);
    if (resultado.affected === 0) throw new Error("Usuario no encontrado");
    return true;
  }
}