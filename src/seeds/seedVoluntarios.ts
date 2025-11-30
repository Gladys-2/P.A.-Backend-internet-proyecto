import { AppDataSource } from "../config/basedatos";
import { Voluntario } from "../modulos/voluntarios/entidades/voluntario.entity";

export const seedVoluntarios = async () => {
  const repo = AppDataSource.getRepository(Voluntario);

  const voluntarios = [
    { nombre: "Esteban", apellido_paterno: "Torrez", apellido_materno: "Suárez", telefono: "12345678" },
    { nombre: "Paulina", apellido_paterno: "Zabala", apellido_materno: "Paredes", telefono: "87654321" }
  ];

  for (const v of voluntarios) {
    const voluntario = repo.create(v);
    await repo.save(voluntario);
  }
};