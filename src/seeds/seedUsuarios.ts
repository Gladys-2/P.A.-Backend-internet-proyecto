import { AppDataSource } from "../config/basedatos";
import { Usuario } from "../modulos/usuarios/entidades/usuario.entity";

export const seedUsuarios = async () => {
  const repo = AppDataSource.getRepository(Usuario);

  const usuarios: Partial<Usuario>[] = [
    {
      nombre: "Ximena",
      apellido_paterno: "Nina",
      apellido_materno: "Quispe",
      correo_electronico: "ximena@gmail.com",
      contrasena: "12345",
      rol: "usuario",
      estado: "Activo"
    },
    {
      nombre: "Administrador",
      apellido_paterno: "admin",
      apellido_materno: "admin",
      correo_electronico: "administrador@gmail.com",
      contrasena: "admi-123",
      rol: "administrador", 
      estado: "Activo"
    }
  ];

  for (const u of usuarios) {
    const usuario = repo.create(u);
    await repo.save(usuario);
  }

  console.log("Usuarios creados..");
};