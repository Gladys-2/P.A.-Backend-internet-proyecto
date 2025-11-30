import bcrypt from "bcryptjs";

/**
 * para la encriptacion use bcrypt
 * @param password 
 * @returns 
 */
export const encriptarContraseña = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10); // Genera un "salt" para mayor seguridad
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

/**
 * en esta parte compara una contraseña con un hash
 * @param password 
 * @param hash
 * @returns
 */
export const compararContraseña = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};