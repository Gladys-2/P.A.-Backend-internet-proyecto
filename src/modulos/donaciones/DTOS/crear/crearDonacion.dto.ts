export interface CrearDonacionDTO {
  usuarioId: number;
  monto: number;
  tipo?: "Dinero" | "Objeto";
  descripcion?: string;
}