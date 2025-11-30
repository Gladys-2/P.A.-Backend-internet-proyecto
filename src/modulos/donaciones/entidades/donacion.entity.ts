import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "../../usuarios/entidades/usuario.entity";

@Entity("donaciones")
export class Donacion {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @ManyToOne(() => Usuario, { eager: true })
  usuario: Usuario | undefined;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  monto: number | undefined;

  @Column({ type: "varchar", length: 50, default: "Dinero" })
  tipo: "Dinero" | "Objeto" | undefined;

  @Column({ type: "varchar", length: 150, nullable: true })
  descripcion: string | undefined;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaDonacion: Date | undefined;
}