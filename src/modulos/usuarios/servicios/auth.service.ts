import { AppDataSource } from "../../../config/basedatos";
import { Usuario } from "../entidades/usuario.entity";
import { LoginUsuarioDTO } from "../DTOS/login/loginUsuario.dto";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { config } from "../../../config/config";

export class AuthService {
  private repo = AppDataSource.getRepository(Usuario);

  async login(data: LoginUsuarioDTO) {
    const usuario = await this.repo.findOne({
      where: { correo_electronico: data.correo_electronico },
      relations: ["rolesAsignados", "rolesAsignados.rol"],
      select: [
        "id",
        "nombre",
        "apellido_paterno",
        "apellido_materno",
        "correo_electronico",
        "contrasena",
        "rol",
        "estado",
      ],
    });

    if (!usuario) throw new Error("Correo no registrado");

    const esCorrecta = await bcrypt.compare(data.contrasena ?? "", usuario.contrasena ?? "");
    if (!esCorrecta) throw new Error("Contraseña incorrecta");

    delete usuario.contrasena;

    // Ajuste del rol para el frontend
    const rolFrontend = usuario.rol?.toLowerCase().includes("admin") ? "administrador" : "usuario";

    const token = jwt.sign(
      {
        id: usuario.id,
        correo: usuario.correo_electronico,
        rolPrincipal: rolFrontend,
        roles: usuario.rolesAsignados?.map(r => r.rol?.nombre),
        estado: usuario.estado,
      },
      config.jwt.secret,
      { expiresIn: "1d" }
    );

    return { mensaje: "Login exitoso", token, usuario: { ...usuario, rol: rolFrontend } };
  }
}