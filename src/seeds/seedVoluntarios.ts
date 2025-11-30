import { AppDataSource } from "../config/basedatos";
import { Voluntario } from "../modulos/voluntarios/entidades/voluntario.entity";

export const seedVoluntarios = async () => {
  const repo = AppDataSource.getRepository(Voluntario);

  const voluntarios = [
    { nombre: "Carlos", apellido_paterno: "Ramírez", apellido_materno: "Suárez", telefono: "12345678" },
    { nombre: "Ana", apellido_paterno: "Torres", apellido_materno: "Paredes", telefono: "87654321" }
  ];

  for (const v of voluntarios) {
    const voluntario = repo.create(v);
    await repo.save(voluntario);
  }
};