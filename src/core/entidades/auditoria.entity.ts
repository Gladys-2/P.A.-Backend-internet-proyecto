import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("auditorias")
export class Auditoria {
  @PrimaryGeneratedColumn()
  id: number | undefined; 

  @Column({ type: "varchar", length: 20, default: "Activo" })
  estado: string | undefined; 

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fecha_creacion: Date | undefined; 

  @Column({ type: "varchar", length: 150, nullable: true })
  usuario_creacion: string | undefined; 

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fecha_modificacion: Date | undefined; 

  @Column({ type: "varchar", length: 150, nullable: true })
  usuario_modificacion: string | undefined; 

  @Column({ type: "text", nullable: true })
  accion: string | undefined; 
}