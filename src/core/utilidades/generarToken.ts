import jwt, { Secret } from "jsonwebtoken";
import { config } from "../../config/config";

/**
 * Genera un JWT para un usuario
 * @param payload inf. del usuario
 * @param expiresInSeg Tiempo de expiración en segundos (por ejemplo 3600 = 1h)
 * @returns tken..
 */
export const generarToken = (payload: object | string | Buffer, expiresInSeg: number = 3600): string => {
  return jwt.sign(payload, config.jwt.secret as Secret, {
    expiresIn: expiresInSeg, 
  });
};