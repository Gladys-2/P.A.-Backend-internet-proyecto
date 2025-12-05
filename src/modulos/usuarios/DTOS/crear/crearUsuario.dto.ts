export class CrearUsuarioDTO {
  nombre: string | undefined;
  apellido_paterno: string | undefined;
  apellido_materno: string | undefined;
  cedula_identidad: string | undefined;
  telefono: string | undefined;
  correo_electronico: string | undefined;
  contrasena: string | undefined;
  rol: string | undefined;
  estado: string | undefined;
  genero: "M" | "F" | "O" | undefined;
}//crear usuario