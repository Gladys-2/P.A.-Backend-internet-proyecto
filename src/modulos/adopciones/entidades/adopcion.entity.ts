import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "../../usuarios/entidades/usuario.entity";
import { Animal } from "../../animales/entidades/animal.entity";

@Entity("adopciones")
export class Adopcion {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @ManyToOne(() => Usuario, { eager: true })
  usuario: Usuario | undefined;

  @ManyToOne(() => Animal, { eager: true })
  animal: Animal | undefined;

  @Column({ type: "varchar", length: 20, default: "Pendiente" })
  estado: "Pendiente" | "Aprobada" | "Rechazada" | undefined;

  @Column({ type: "timestamp" })
  fechaSolicitud: Date | undefined;

  @Column({ type: "timestamp", nullable: true })
  fechaAprobacion: Date | undefined;

  @Column({ type: "timestamp", nullable: true })
  fechaRechazo: Date | undefined;

  @Column({ type: "text", nullable: true })
  motivoRechazo: string | undefined;

  @Column({ type: "text", nullable: true })
  comentarios: string | undefined;

  @Column({ default: true })
  activo: boolean | undefined;
}
