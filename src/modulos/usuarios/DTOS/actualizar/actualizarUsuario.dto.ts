export class ActualizarUsuarioDTO {
  nombre?: string | undefined;
  apellido_paterno?: string | undefined;
  apellido_materno?: string | undefined;
  cedula_identidad?: string | undefined;
  telefono?: string | undefined;
  correo_electronico?: string | undefined;
  contrasena?: string | undefined;
  estado?: "Activo" | "Inactivo";
  rol: "usuario" | "administrador" | undefined;
} //act.usuario