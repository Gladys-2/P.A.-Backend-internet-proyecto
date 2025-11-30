import { AppDataSource } from "../../../config/basedatos";
import { Animal } from "../entidades/animal.entity";

export const animalesRepository = AppDataSource.getRepository(Animal);