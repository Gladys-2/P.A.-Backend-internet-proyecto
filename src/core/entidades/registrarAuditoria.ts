import { getRepository } from "typeorm";
import { Auditoria } from "../entidades/auditoria.entity";

/**
 * Su funcion es el registrar acciones en la tabla Auditoria
 * @param usuario 
 * @param accion 
 */
export const registrarAuditoria = async (usuario: string, accion: string) => {
  try {
    const auditoriaRepo = getRepository(Auditoria);

    const nuevoRegistro = auditoriaRepo.create({
      usuario_creacion: usuario,
      accion: accion,
      estado: "Activo",
    });

    await auditoriaRepo.save(nuevoRegistro);
    console.log("la auditoria ya fue registrada");
  } catch (error) {
    console.error("Salio error al registrar la auditoria", error);
  }
};