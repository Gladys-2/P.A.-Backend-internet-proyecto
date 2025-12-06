export interface CrearDonacionDTO {
  metodo: string;
  usuarioId: number;
  monto: number;
  tipo?: "Dinero" | "Objeto";
  descripcion?: string;
} //crear donacion