export interface CrearRefugioDTO {
  nombre: string;
  direccion?: string;
  ciudad?: string;
  departamento?: string;
  telefono?: string;
  correo_electronico?: string;
  estado?: "Activo" | "Inactivo";
}