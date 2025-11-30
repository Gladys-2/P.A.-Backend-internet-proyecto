import { Request, Response, NextFunction } from "express";

export const manejadorErroresMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error); // Muestra el error en consola
  res.status(error.status || 500).json({
    success: false,
    message: error.message || "Error interno del servidor",
    data: null,
    timestamp: new Date().toISOString(),
  });
};
