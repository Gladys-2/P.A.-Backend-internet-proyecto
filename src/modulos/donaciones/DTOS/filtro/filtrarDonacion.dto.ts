export interface FiltrarDonacionDTO {
  usuarioId?: number;
  tipo?: "Dinero" | "Objeto";
  montoMin?: number;
  montoMax?: number;
}