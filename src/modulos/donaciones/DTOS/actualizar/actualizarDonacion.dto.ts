export interface ActualizarDonacionDTO {
  monto?: number;
  tipo?: "Dinero" | "Objeto";
  descripcion?: string;
} //actualiacion de donacion