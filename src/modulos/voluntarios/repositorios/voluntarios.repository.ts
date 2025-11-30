import { AppDataSource } from "../../../config/basedatos";
import { Voluntario } from "../entidades/voluntario.entity";
import { Repository } from "typeorm";

export const voluntarioRepository: Repository<Voluntario> = AppDataSource.getRepository(Voluntario);