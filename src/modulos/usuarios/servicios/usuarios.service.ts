import { AppDataSource } from "../../../config/basedatos";
import { Usuario } from "../entidades/usuario.entity";
import { UsuarioRol } from "../entidades/usuarioRol.entity";
import { Rol } from "../entidades/rol.entity";
import { CrearUsuarioDTO } from "../DTOS/crear/crearUsuario.dto";
import { ActualizarUsuarioDTO } from "../DTOS/actualizar/actualizarUsuario.dto";

export class UsuariosService {
  private static repoUsuario = AppDataSource.getRepository(Usuario);
  private static repoUsuarioRol = AppDataSource.getRepository(UsuarioRol);
  private static repoRol = AppDataSource.getRepository(Rol);

  // Crear usuario con rol asignado
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

    const usuario = this.repoUsuario.create(usuarioData);
    await this.repoUsuario.save(usuario);

    // ⚡ Asignar rol por defecto
    const rolAsignar = await this.repoRol.findOneBy({
      nombre: data.rol || "usuario",
    });

    if (rolAsignar) {
      const usuarioRol = this.repoUsuarioRol.create({
        usuario: usuario,
        rol: rolAsignar,
        estado: "Activo",
        fechaCreacion: new Date(),
        fechaModificacion: new Date(),
        activo: true,
      });
      await this.repoUsuarioRol.save(usuarioRol);
    }

    return this.obtenerUsuarioPorId(usuario.id!); // traer usuario con roles
  }

  // Obtener todos los usuarios con roles
  static async obtenerUsuarios() {
    return await this.repoUsuario.find({
      relations: ["rolesAsignados", "rolesAsignados.rol"],
    });
  }

  static async obtenerUsuarioPorId(id: number) {
    const usuario = await this.repoUsuario.findOne({
      where: { id },
      relations: ["rolesAsignados", "rolesAsignados.rol"],
    });
    if (!usuario) throw new Error("Usuario no encontrado");
    return usuario;
  }

  static async actualizarUsuario(id: number, data: ActualizarUsuarioDTO) {
    await this.repoUsuario.update(id, data);
    return await this.obtenerUsuarioPorId(id);
  }

  static async eliminarUsuario(id: number) {
    const resultado = await this.repoUsuario.delete(id);
    if (resultado.affected === 0) throw new Error("Usuario no encontrado");
    return true;
  }
}