import { AppDataSource } from "../../../config/basedatos";
import { Adopcion } from "../entidades/adopcion.entity";

export const adopcionesRepository = AppDataSource.getRepository(Adopcion);
