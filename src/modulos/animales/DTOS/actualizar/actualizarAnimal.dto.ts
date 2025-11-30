export interface ActualizarAnimalDTO {
  nombre?: string;
  especie?: string;
  raza?: string;
  edad?: number;
  estado?: "Disponible" | "Adoptado";
  descripcion?: string;
  foto?: string;
}