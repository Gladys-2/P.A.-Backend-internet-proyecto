import { AppDataSource } from "../config/basedatos";
import { Refugio } from "../modulos/refugios/entidades/refugio.entity";

export const seedRefugios = async () => {
  const repo = AppDataSource.getRepository(Refugio);

  const refugios = [
    { nombre: "Albergue La Paz", direccion: "Av. Principal 123", ciudad: "La Paz", departamento: "La Paz", telefono: "12345678", correo_electronico: "contacto@alberguelapaz.com" },
    { nombre: "Albergue Santa Cruz", direccion: "Calle Falsa 456", ciudad: "Santa Cruz", departamento: "Santa Cruz", telefono: "87654321", correo_electronico: "contacto@alberguesc.com" }
  ];

  for (const r of refugios) {
    const refugio = repo.create(r);
    await repo.save(refugio);
  }
};