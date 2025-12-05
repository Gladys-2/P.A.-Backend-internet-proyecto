import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import { UsuarioRol } from "./usuarioRol.entity";
import * as bcrypt from "bcryptjs";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 100 })
  nombre: string | undefined;

  @Column({ type: "varchar", length: 100 })
  apellido_paterno: string | undefined;

  @Column({ type: "varchar", length: 100 })
  apellido_materno: string | undefined;

  @Column({ type: "varchar", length: 20, nullable: true })
  cedula_identidad: string | undefined;

  @Column({ type: "varchar", length: 20, nullable: true })
  telefono: string | undefined;

  @Column({ type: "varchar", length: 150, unique: true })
  correo_electronico: string | undefined;

  @Column({ type: "text", select: false })
  contrasena: string | undefined;

  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.usuario)
  rolesAsignados: UsuarioRol[] | undefined;

  @Column({ type: "varchar", length: 20, default: "usuario" })
  rol: "usuario" | "administrador" | undefined;

  @Column({ type: "enum", enum: ["M", "F", "O"], default: "M" }) // <- agregas esto
  genero: "M" | "F" | "O" | undefined;
  
  @Column({ type: "varchar", length: 10, default: "Activo" })
  estado: "Activo" | "Inactivo" | undefined;

  @BeforeInsert()
  @BeforeUpdate()
  async encriptarContrasena() {
    if (this.contrasena && !this.contrasena.startsWith("$2a$")) {
      this.contrasena = await bcrypt.hash(this.contrasena, 10);
    }
  }
} //usuario.entity