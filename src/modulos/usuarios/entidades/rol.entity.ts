import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
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

  @Column({ type: "boolean", default: true })
  activo: boolean | undefined;

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date | undefined;

  @UpdateDateColumn({ type: "timestamp" })
  fechaModificacion: Date | undefined;
}