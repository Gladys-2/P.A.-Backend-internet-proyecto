import { AppDataSource } from "../config/basedatos";
import { Rol } from "../modulos/usuarios/entidades/rol.entity";

export const seedRoles = async () => {
  const repo = AppDataSource.getRepository(Rol);

  const roles = [
    { nombre: "Usuario" },
    { nombre: "Administrador" }
  ];

  for (const r of roles) {
    const rol = repo.create(r);
    await repo.save(rol);
  }
};