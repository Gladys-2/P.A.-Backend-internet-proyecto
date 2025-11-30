import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm";
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

  @CreateDateColumn({ type: "timestamp" })
  fechaDonacion: Date | undefined;

  @Column({ type: "varchar", length: 50, default: "Efectivo" })
  metodo: "Efectivo" | "Transferencia" | "PayPal" | "Otro" | undefined;

  @Column({ type: "varchar", length: 20, default: "Pendiente" })
  estado: "Pendiente" | "Aprobada" | "Rechazada" | undefined;

  @Column({ type: "varchar", length: 255, nullable: true })
  qr?: string;

  @Column({ type: "text", nullable: true })
  notasInternas?: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  comprobante?: string;
}