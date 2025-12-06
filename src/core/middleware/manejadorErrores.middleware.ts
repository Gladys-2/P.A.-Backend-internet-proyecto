import { Request, Response, NextFunction } from "express";

export const manejadorErroresMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error); 
  res.status(error.status || 500).json({
    success: false,
    message: error.message || "fue un error interno del servidor",
    data: null,
    timestamp: new Date().toISOString(),
  });
};
//capturar cualquier error que ocurra en la pag.web