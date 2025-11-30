export interface FiltrarAdopcionDTO {
  usuarioId?: number;
  animalId?: number;
  estado?: "Pendiente" | "Aprobada" | "Rechazada";
}