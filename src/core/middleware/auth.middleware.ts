import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { config } from "../../config/config";

export interface AuthRequest extends Request {
  user?: any;
}

// Verifica token JWT
export const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ mensaje: "Token requerido" });

  const tokenParts = authHeader.split(" ");
  if (tokenParts[0] !== "Bearer" || !tokenParts[1])
    return res.status(401).json({ mensaje: "Token requerido" });

  const token = tokenParts[1];

  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: "Token inválido" });
  }
};

// Solo admin
export const esAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) return res.status(401).json({ mensaje: "No autorizado" });
  if (req.user.rol !== "administrador") return res.status(403).json({ mensaje: "Acceso solo para administradores" });
  next();
};