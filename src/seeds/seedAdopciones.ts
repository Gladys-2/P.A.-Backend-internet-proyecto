import { AppDataSource } from "../config/basedatos";
import { Adopcion } from "../modulos/adopciones/entidades/adopcion.entity";
import { Usuario } from "../modulos/usuarios/entidades/usuario.entity";
import { Animal } from "../modulos/animales/entidades/animal.entity";

export const seedAdopciones = async () => {
  const repo = AppDataSource.getRepository(Adopcion);
  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const animalRepo = AppDataSource.getRepository(Animal);

  const usuario = await usuarioRepo.findOneBy({ correo_electronico: "maria@example.com" });
  const animal = await animalRepo.findOneBy({ nombre: "Firulais" });

  if (usuario && animal) {
    // Forzamos a TypeScript a aceptar los objetos completos usando `as any`
    const adopcion = repo.create({
      usuario: usuario as any,
      animal: animal as any,
      estado: "Pendiente",
      fechaSolicitud: new Date()
    });

    await repo.save(adopcion);
    console.log("Adopción creada correctamente!");
  } else {
    console.log("No se encontró usuario o animal para crear la adopción.");
  }
};