import { AppDataSource } from "../config/basedatos";
import { Animal } from "../modulos/animales/entidades/animal.entity";

export const seedAnimales = async () => {
  const repo = AppDataSource.getRepository(Animal);

  const animales: Partial<Animal>[] = [
    { nombre: "Enzo", especie: "Perro", raza: "Labrador", edad: 3, estado: "Disponible" },
    { nombre: "Pelusa", especie: "Gato", raza: "Siames", edad: 2, estado: "Disponible" }
  ];

  for (const a of animales) {
    const animal = repo.create(a);
    await repo.save(animal);
  }

  console.log("los animales fueron creados correctamente :)");
};