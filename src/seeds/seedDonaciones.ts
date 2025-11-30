import { AppDataSource } from "../config/basedatos";
import { Donacion } from "../modulos/donaciones/entidades/donacion.entity";
import { Usuario } from "../modulos/usuarios/entidades/usuario.entity";

export const seedDonaciones = async () => {
  const repo = AppDataSource.getRepository(Donacion);
  const usuarioRepo = AppDataSource.getRepository(Usuario);

  // Buscar un usuario existente para asociarlo a la donación
  const usuario = await usuarioRepo.findOneBy({ correo_electronico: "maria@example.com" });
  if (!usuario) {
    console.log("No se encontró el usuario para asociar las donaciones");
    return;
  }

  const donaciones: Partial<Donacion>[] = [
    { usuario, monto: 90, tipo: "Dinero", descripcion: "Donación en efectivo" },
    { usuario, monto: 100, tipo: "Objeto", descripcion: "Donación de alimentos" }
  ];

  for (const d of donaciones) {
    const donacion = repo.create(d);
    await repo.save(donacion);
  }

  console.log("las donaciones fueron creadas exitosamente");
};