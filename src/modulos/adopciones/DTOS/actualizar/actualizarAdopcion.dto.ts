export interface ActualizarAdopcionDTO {
  estado?: "Pendiente" | "Aprobada" | "Rechazada";
  motivoRechazo?: string;
}