import { Router } from "express";
import { loginUsuarioController } from "../controladores/auth.controller";

const router = Router();

router.post("/login", loginUsuarioController);

export default router;