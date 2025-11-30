import { AppDataSource } from "../../../config/basedatos";
import { Refugio } from "../entidades/refugio.entity";

export const refugiosRepository = AppDataSource.getRepository(Refugio);