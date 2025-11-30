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

  @Column({ type: "varchar", length: 10, default: "Disponible" })
  estado: "Disponible" | "Adoptado" | undefined;

  @Column({ type: "text", nullable: true })
  descripcion?: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  foto?: string;
}