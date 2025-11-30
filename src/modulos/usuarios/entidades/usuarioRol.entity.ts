import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from "typeorm";
import { Usuario } from "./usuario.entity";
import { Rol } from "./rol.entity";

@Entity("usuarios_roles")
export class UsuarioRol {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @ManyToOne(() => Usuario, (usuario) => usuario.rolesAsignados, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "usuario_id" })
  usuario: Usuario | undefined;

  @ManyToOne(() => Rol, (rol) => rol.usuariosAsignados, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "rol_id" })
  rol: Rol | undefined;

  @Column({ type: "varchar", length: 10, default: "Activo" })
  estado: "Activo" | "Inactivo" | undefined;
}