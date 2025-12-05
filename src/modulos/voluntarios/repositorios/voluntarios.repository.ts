import { AppDataSource } from "../../../config/basedatos";
import { Voluntario } from "../entidades/voluntario.entity";

export const voluntarioRepository = AppDataSource.getRepository(Voluntario);