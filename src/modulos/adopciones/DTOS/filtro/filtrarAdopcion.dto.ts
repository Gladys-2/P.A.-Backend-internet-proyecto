export interface FiltrarAdopcionDTO {
  usuarioId?: number;
  animalId?: number;
  estado?: "Pendiente" | "Aprobada" | "Rechazada";
}
//son filtros que puedes usar para buscar adopciones en la base de datos.