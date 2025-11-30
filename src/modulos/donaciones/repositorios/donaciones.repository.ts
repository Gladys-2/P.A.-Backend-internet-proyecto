import { AppDataSource } from "../../../config/basedatos";
import { Donacion } from "../entidades/donacion.entity";

export const donacionesRepository = AppDataSource.getRepository(Donacion);
