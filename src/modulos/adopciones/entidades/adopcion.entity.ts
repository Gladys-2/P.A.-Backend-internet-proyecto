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

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaSolicitud: Date | undefined;
}