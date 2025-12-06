import { Router, Response } from "express";
import { authenticateJWT, AuthRequest } from "../../../core/middleware/auth.middleware";

const router = Router();

router.get("/usuario", authenticateJWT, (req, res: Response) => {
  const authReq = req as AuthRequest;
  res.json({ mensaje: "Usuario autenticado", user: authReq.user });
});

export default router;