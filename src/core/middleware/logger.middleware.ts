import { Request, Response, NextFunction } from "express";
import moment from "moment-timezone";

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const horaBolivia = moment().tz("America/La_Paz").format("YYYY-MM-DD HH:mm:ss");
  console.log(`[${horaBolivia}] ${req.method} ${req.url}`);
  next();
};
//registra información de cada petición