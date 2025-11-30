import { AppDataSource } from "../config/basedatos";
import { UsuarioRol } from "../modulos/usuarios/entidades/usuarioRol.entity";
import { Usuario } from "../modulos/usuarios/entidades/usuario.entity";
import { Rol } from "../modulos/usuarios/entidades/rol.entity";

export const seedUsuarioRoles = async () => {
  const repo = AppDataSource.getRepository(UsuarioRol);
  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const rolRepo = AppDataSource.getRepository(Rol);

  const usuario = await usuarioRepo.findOneBy({ correo_electronico: "Administrador@gmail.com" });
  const rol = await rolRepo.findOneBy({ nombre: "Administrador" });

  if (usuario && rol) {
    const usuarioRol = repo.create({ usuario, rol });
    await repo.save(usuarioRol);
  }
};