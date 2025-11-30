import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";
import moment from "moment-timezone";

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

  @Column({ type: "date", nullable: true })
  fechaNacimiento?: Date;

  @Column({ type: "varchar", length: 20, nullable: true })
  telefono: string | undefined;

  @Column({ type: "varchar", length: 150, unique: true })
  correo_electronico: string | undefined;

  @Column({ type: "varchar", length: 250, nullable: true })
  direccion: string | undefined;

  @Column({ type: "timestamp", nullable: true })
  fechaIngreso: Date | undefined;

  @Column({ type: "varchar", length: 100, nullable: true })
  areaAsignada: string | undefined;

  @Column({ type: "varchar", length: 100, nullable: true })
  disponibilidad: string | undefined;

  @Column({ type: "text", nullable: true })
  observaciones: string | undefined;

  @Column({ type: "varchar", length: 20, default: "Activo" })
  estado: "Activo" | "Inactivo" | undefined;

  @BeforeInsert()
  setFechaIngreso() {
    if (!this.fechaIngreso) {
      this.fechaIngreso = moment().tz("America/La_Paz").toDate();
    }
  }
}