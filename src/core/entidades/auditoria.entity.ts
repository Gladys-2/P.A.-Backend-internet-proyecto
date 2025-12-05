import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
// Entity es cuando se registra de lo que sucede en tu página web.
@Entity("auditorias")
export class Auditoria {
  @PrimaryGeneratedColumn()
  id: number | undefined;  //id-->identificador único

  @Column({ type: "varchar", length: 20, default: "Activo" })
  estado: string | undefined; 

  @CreateDateColumn({ 
    type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP AT TIME ZONE 'America/La_Paz'" 
  })
  fecha_creacion: Date | undefined; 

  @Column({ type: "varchar", length: 150, nullable: true })
  usuario_creacion: string | undefined; 

  @UpdateDateColumn({ 
    type: "timestamp", 
    default: () => "CURRENT_TIMESTAMP AT TIME ZONE 'America/La_Paz'" 
  })
  fecha_modificacion: Date | undefined; 

  @Column({ type: "varchar", length: 150, nullable: true })
  usuario_modificacion: string | undefined; 

  @Column({ type: "text", nullable: true })
  accion: string | undefined; 
}