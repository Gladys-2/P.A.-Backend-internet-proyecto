import { DataSource } from "typeorm"; //DataSource viene de TypeORM manejar BD de forma mas facil en node.jsy typescript
import "dotenv/config";
//estas son las entidades
import { Usuario } from "../modulos/usuarios/entidades/usuario.entity";
import { Rol } from "../modulos/usuarios/entidades/rol.entity";
import { UsuarioRol } from "../modulos/usuarios/entidades/usuarioRol.entity";
import { Animal } from "../modulos/animales/entidades/animal.entity";
import { Adopcion } from "../modulos/adopciones/entidades/adopcion.entity";
import { Voluntario } from "../modulos/voluntarios/entidades/voluntario.entity";
import { Donacion } from "../modulos/donaciones/entidades/donacion.entity";
import { Refugio } from "../modulos/refugios/entidades/refugio.entity";
import { Auditoria } from "../core/entidades/auditoria.entity";

export const AppDataSource = new DataSource({
  type: "postgres", //indica que tu base de datos es PostgreSQL.
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, // esto crea automaticamente las tablas solo que aun no esta en desarrollo.no en produccion
  logging: false,//desactiva los registros automáticos de consultas en consola.
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