export interface FiltrarAnimalDTO {
  nombre?: string;
  especie?: string;
  raza?: string;
  estado_animal?: "Disponible" | "Adoptado" | "En cuidado";
}