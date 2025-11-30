import { AppDataSource } from "../../../config/basedatos";
import { Voluntario } from "../entidades/voluntario.entity";
import { Repository } from "typeorm";
// Repositorio para manejar la entidad Voluntario (CRUD y consultas a la base de datos)
export const voluntarioRepository: Repository<Voluntario> = AppDataSource.getRepository(Voluntario);