import { AppDataSource } from "../config/basedatos";
import { Adopcion } from "../modulos/adopciones/entidades/adopcion.entity";
import { Usuario } from "../modulos/usuarios/entidades/usuario.entity";
import { Animal } from "../modulos/animales/entidades/animal.entity";

export const seedAdopciones = async () => {
  const repo = AppDataSource.getRepository(Adopcion);
  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const animalRepo = AppDataSource.getRepository(Animal);

  const usuario = await usuarioRepo.findOneBy({ correo_electronico: "ximena@gmail.com" });
  const animal = await animalRepo.findOneBy({ nombre: "Enzo" });

  if (usuario && animal) {
    const adopcion = repo.create({
      usuario: usuario as any,
      animal: animal as any,
      estado: "Pendiente",
      fechaSolicitud: new Date()
    });

    await repo.save(adopcion);
    console.log("la adopción fue creada correctamente :)");
  } else {
    console.log("No se encontró el usuario o el animal para crear la adopción.");
  }
};