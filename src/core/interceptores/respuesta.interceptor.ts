import { Request, Response, NextFunction } from "express";

export const respuestaInterceptor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const originalJson = res.json;

  res.json = function (data: any) {
    const respuestaFormateada = {
      success: res.statusCode >= 200 && res.statusCode < 300,
      message: data.message || "",
      data: data.data || data,
      timestamp: new Date().toLocaleString("es-BO", { timeZone: "America/La_Paz" }),
    };

    return originalJson.call(this, respuestaFormateada);
  };

  next();
};