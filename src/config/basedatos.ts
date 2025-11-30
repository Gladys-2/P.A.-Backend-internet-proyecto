import { DataSource } from "typeorm";
import "dotenv/config";

// Entidades de usuarios
import { Usuario } from "../modulos/usuarios/entidades/usuario.entity";
import { Rol } from "../modulos/usuarios/entidades/rol.entity";
import { UsuarioRol } from "../modulos/usuarios/entidades/usuarioRol.entity";

// Entidades de animales
import { Animal } from "../modulos/animales/entidades/animal.entity";

// Entidades de adopciones
import { Adopcion } from "../modulos/adopciones/entidades/adopcion.entity";

// Entidades de voluntarios
import { Voluntario } from "../modulos/voluntarios/entidades/voluntario.entity";

// Entidades de donaciones
import { Donacion } from "../modulos/donaciones/entidades/donacion.entity";

// Entidades de refugios
import { Refugio } from "../modulos/refugios/entidades/refugio.entity";

// Entidades de auditoría
import { Auditoria } from "../core/entidades/auditoria.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // Para desarrollo. En producción usa migraciones
  logging: false,
  entities: [
    Usuario,
    Rol,
    UsuarioRol,
    Animal,
    Adopcion,
    Voluntario,
    Donacion,
    Refugio,
    Auditoria,
  ],
});