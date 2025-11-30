import { AppDataSource } from "../../../config/basedatos";
import { Refugio } from "../entidades/refugio.entity";

export const refugiosRepository = AppDataSource.getRepository(Refugio);
            //operaciones Crud                                     // obtiene el repositorio de la entidad refugio
// repository -->controlador listo para usar