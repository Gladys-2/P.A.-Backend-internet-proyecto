import { AppDataSource } from "../../../config/basedatos";
import { Usuario } from "../../usuarios/entidades/usuario.entity";
import { LoginUsuarioDTO } from "../DTOS/login/loginUsuario.dto";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { config } from "../../../config/config";

export class AuthService {

  private repo = AppDataSource.getRepository(Usuario);

  async login(data: LoginUsuarioDTO) {
    const usuario = await this.repo.findOne({
      where: { correo_electronico: data.correo_electronico },
      select: ["id", "correo_electronico", "contrasena", "rol", "estado"],
    });

    if (!usuario) throw new Error("Correo no registrado");

    const esCorrecta = await bcrypt.compare(
      data.contrasena ?? "",
      usuario.contrasena ?? ""
    );
    if (!esCorrecta) throw new Error("Contraseña incorrecta");

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      config.jwt.secret,
      { expiresIn: "1d" }
    );

    return {
      mensaje: "Login correcto",
      token,
      usuario: {
        id: usuario.id,
        correo_electronico: usuario.correo_electronico,
        rol: usuario.rol,
      },
    };
  }
}