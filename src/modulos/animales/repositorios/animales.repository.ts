import { AppDataSource } from "../../../config/basedatos";
import { Animal } from "../entidades/animal.entity";

export const animalesRepository = AppDataSource.getRepository(Animal);
           //operaciones Crud                                     // obtiene el repositorio de la entidad adopcion
// repository -->controlador listo para usar