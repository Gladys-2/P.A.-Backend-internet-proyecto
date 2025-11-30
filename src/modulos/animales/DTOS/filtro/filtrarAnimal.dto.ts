export interface FiltrarAnimalDTO {
  nombre?: string;
  especie?: string;
  raza?: string;
  estado?: "Disponible" | "Adoptado";
}