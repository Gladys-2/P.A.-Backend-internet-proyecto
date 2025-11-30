import { AppDataSource } from "../../../config/basedatos";
import { Donacion } from "../entidades/donacion.entity";

export const donacionesRepository = AppDataSource.getRepository(Donacion);
           //operaciones Crud                                     // obtiene el repositorio de la entidad animal
// repository -->controlador listo para usar