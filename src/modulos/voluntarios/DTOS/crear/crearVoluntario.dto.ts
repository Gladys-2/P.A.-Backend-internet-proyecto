export interface CrearVoluntarioDTO {
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  correo_electronico: string;
  telefono?: string;
  areaAsignada?: string;
  disponibilidad?: string;
  estado?: "Activo" | "Inactivo";
}