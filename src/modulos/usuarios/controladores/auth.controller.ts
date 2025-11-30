import { Request, Response } from "express";
import { AuthService } from "../servicios/auth.service";
import { LoginUsuarioDTO } from "../DTOS/login/loginUsuario.dto";

const service = new AuthService();

export const loginUsuarioController = async (req: Request, res: Response) => {
  try {
    const data: LoginUsuarioDTO = req.body;
    const resultado = await service.login(data);
    return res.json(resultado);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}; //controlador de login de usuario 