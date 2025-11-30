import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import moment from "moment-timezone";

@Entity("refugios")
export class Refugio {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: "varchar", length: 150 })
  nombre: string | undefined;

  @Column({ type: "varchar", length: 250, nullable: true })
  direccion: string | undefined;

  @Column({ type: "varchar", length: 100, nullable: true })
  ciudad: string | undefined;

  @Column({ type: "varchar", length: 100, nullable: true })
  departamento: string | undefined;

  @Column({ type: "varchar", length: 20, nullable: true })
  telefono: string | undefined;

  @Column({ type: "varchar", length: 150, nullable: true })
  correo_electronico: string | undefined;

  @Column({ type: "varchar", length: 10, default: "Activo" })
  estado: "Activo" | "Inactivo" | undefined;

  @CreateDateColumn({ 
    type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP" 
  })
  fecha_creacion: Date | undefined;

  @UpdateDateColumn({ 
    type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP" 
  })
  fecha_modificacion: Date | undefined;
}