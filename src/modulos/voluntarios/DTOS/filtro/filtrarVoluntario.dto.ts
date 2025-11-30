export interface FiltrarVoluntarioDTO {
  nombre?: string;
  apellido_paterno?: string;
  apellido_materno?: string;
  correo_electronico?: string;
  estado?: "Activo" | "Inactivo";
}