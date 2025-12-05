import moment from "moment";
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity("animales")
export class Animal {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 100 })
  nombre: string | undefined;

  @Column({ type: "varchar", length: 50 })
  especie: string | undefined;

  @Column({ type: "varchar", length: 50 })
  raza: string | undefined;

  @Column({ type: "int" })
  edad: number | undefined;

  @Column({ type: "varchar", length: 20, default: "Disponible" })
  estado_animal: "Disponible" | "Adoptado" | "En cuidado" | undefined;

  @Column({ type: "text", nullable: true })
  descripcion?: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  foto: string | undefined;

  @Column({ type: "varchar", length: 10, nullable: true })
  sexo: "Macho" | "Hembra" | undefined;

  @Column({ type: "varchar", length: 20, nullable: true })
  tamano: "Pequeño" | "Mediano" | "Grande" | undefined;

  @Column({ type: "float", nullable: true })
  peso: number | undefined;

  @Column({ type: "boolean", default: false })
  vacunado: boolean = false;

  @Column({ type: "varchar", length: 10, nullable: true })
  estado?: "Activo" | "Inactivo";

  @Column({ type: "boolean", default: false })
  esterilizado: boolean = false;

  @Column({ type: "timestamp" })
  fechaIngreso: Date | undefined;

  @BeforeInsert()
  setFechaIngreso() {
    this.fechaIngreso = moment().tz("America/La_Paz").toDate();
  }
}