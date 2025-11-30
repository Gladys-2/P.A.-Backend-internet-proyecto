import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UsuarioRol } from "./usuarioRol.entity";

@Entity("roles")
export class Rol {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 50, unique: true })
  nombre: string | undefined;

  @Column({ type: "varchar", length: 200, nullable: true })
  descripcion: string | undefined;

  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.rol)
  usuariosAsignados: UsuarioRol[] | undefined;
}