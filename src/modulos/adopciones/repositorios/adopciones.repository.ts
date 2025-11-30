import { AppDataSource } from "../../../config/basedatos";
import { Adopcion } from "../entidades/adopcion.entity";

export const adopcionesRepository = AppDataSource.getRepository(Adopcion);
           //operaciones Crud                                     // obtiene el repositorio de la entidad adopcion
// repository -->controlador listo para usar