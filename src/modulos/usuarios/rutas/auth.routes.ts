import { Router, Request, Response } from "express";
import { loginUsuarioController } from "../controladores/auth.controller";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("las rutas de auth estan activas");
});
router.get("/test", (_req: Request, res: Response) => {
  res.send("Ruta auth estan funcionando correctamenteeee");
});
router.post("/login", loginUsuarioController);

export default router; //rutas..