import { AppDataSource } from "../config/basedatos";
import { Refugio } from "../modulos/refugios/entidades/refugio.entity";

export const seedRefugios = async () => {
  const repo = AppDataSource.getRepository(Refugio);

  const refugios = [
    { nombre: "Albergue Patitas", direccion: "Av. Principal 123", ciudad: "La Paz", departamento: "La Paz", telefono: "12345678", correo_electronico: "contacto@alberguepatitas.com" },
    { nombre: "Albergue huellitas", direccion: "Calle Bush 456", ciudad: "La Paz", departamento: "La Paz", telefono: "87654321", correo_electronico: "contacto@alberguehuellitas.com" }
  ];

  for (const r of refugios) {
    const refugio = repo.create(r);
    await repo.save(refugio);
  }
};