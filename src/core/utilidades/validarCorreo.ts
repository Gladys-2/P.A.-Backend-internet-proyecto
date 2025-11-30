/**
 * Función para validar un correo electrónico
 * @param correo  
 * @returns 
 */
export const validarCorreo = (correo: string): boolean => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(correo);
};