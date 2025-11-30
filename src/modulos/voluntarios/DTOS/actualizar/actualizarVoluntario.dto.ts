export interface ActualizarVoluntarioDTO {
  nombre?: string;
  apellido_paterno?: string;
  apellido_materno?: string;
  telefono?: string;
  correo_electronico?: string;
  direccion?: string;
  estado?: "Activo" | "Inactivo";
}