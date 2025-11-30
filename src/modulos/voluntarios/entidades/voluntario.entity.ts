import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("voluntarios")
export class Voluntario {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 100 })
  nombre: string | undefined;

  @Column({ type: "varchar", length: 100 })
  apellido_paterno: string | undefined;

  @Column({ type: "varchar", length: 100 })
  apellido_materno: string | undefined;

  @Column({ type: "varchar", length: 20, nullable: true })
  telefono: string | undefined;

  @Column({ type: "varchar", length: 150, unique: true })
  correo_electronico: string | undefined;

  @Column({ type: "varchar", length: 150, nullable: true })
  direccion: string | undefined;

  @Column({ type: "varchar", length: 20, default: "Activo" })
  estado: "Activo" | "Inactivo" | undefined;
}