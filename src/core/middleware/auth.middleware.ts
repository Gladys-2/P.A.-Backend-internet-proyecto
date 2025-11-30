import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../config/config";

interface UsuarioRequest extends Request {
  user?: any; 
}

export const authMiddleware = (
  req: UsuarioRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Espera "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ message: "No autorizado, falta token" });
  }

  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};