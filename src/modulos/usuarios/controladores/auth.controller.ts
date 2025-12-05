import { Request, Response } from "express";
import { AppDataSource } from "../../../config/basedatos";
import { Usuario } from "../entidades/usuario.entity";
import * as bcrypt from "bcryptjs";

export const loginUsuarioController = async (req: Request, res: Response) => {
  try {
    const { correo_electronico, contrasena } = req.body;

    if (!correo_electronico || !contrasena) {
      return res.status(400).json({ error: "Correo y contraseña son requeridos" });
    } 

    const usuarioRepo = AppDataSource.getRepository(Usuario);
    const usuario = await usuarioRepo.findOne({
      where: { correo_electronico },
      select: ["id", "nombre", "apellido_paterno", "apellido_materno", "correo_electronico", "contrasena", "rol", "estado"],
      relations: ["rolesAsignados", "rolesAsignados.rol"],
    });

    if (!usuario) {
      return res.status(401).json({ error: "Correo o contraseña incorrectos" });
    }

    const esValido = await bcrypt.compare(contrasena, usuario.contrasena!);
    if (!esValido) {
      return res.status(401).json({ error: "Correo o contraseña incorrectos" });
    }
    delete usuario.contrasena;

    return res.json({ usuario });
  } catch (error: any) {
    console.error("Error login:", error);
    return res.status(500).json({ error: "Error en respuesta del servidor" });
  }
};