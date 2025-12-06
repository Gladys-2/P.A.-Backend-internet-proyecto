import { Request, Response } from "express";
import { AppDataSource } from "../../../config/basedatos";
import { Usuario } from "../entidades/usuario.entity";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { config } from "../../../config/config";

export const loginUsuarioController = async (req: Request, res: Response) => {
  const { correo_electronico, contrasena } = req.body;

  if (!correo_electronico || !contrasena) {
    return res.status(400).json({ mensaje: "Correo y contraseña son obligatorios" });
  }

  const usuarioRepo = AppDataSource.getRepository(Usuario);
  const usuario = await usuarioRepo.findOne({
    where: { correo_electronico },
    select: ["id", "correo_electronico", "contrasena", "rol", "nombre", "apellido_paterno", "apellido_materno", "estado"],
    relations: ["rolesAsignados", "rolesAsignados.rol"],
  });

  if (!usuario) return res.status(404).json({ mensaje: "Usuario no registrado" });

  const esCorrecta = await bcrypt.compare(contrasena, usuario.contrasena ?? "");
  if (!esCorrecta) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

  delete usuario.contrasena;

  // Ajuste del rol para el frontend
  const rolFrontend = usuario.rol?.toLowerCase().includes("admin") ? "administrador" : "usuario";

  const token = jwt.sign(
    {
      id: usuario.id,
      correo: usuario.correo_electronico,
      rol: rolFrontend,
      roles: usuario.rolesAsignados?.map(r => r.rol?.nombre),
    },
    config.jwt.secret,
    { expiresIn: "1d" }
  );

  res.json({ mensaje: "Login exitoso", token, usuario: { ...usuario, rol: rolFrontend } });
};