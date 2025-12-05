export interface ActualizarAnimalDTO {
  nombre?: string;
  especie?: string;
  raza?: string;
  edad?: number;
  descripcion?: string;
  foto?: string;
  estado_animal?: "Disponible" | "Adoptado" | "En cuidado";
}