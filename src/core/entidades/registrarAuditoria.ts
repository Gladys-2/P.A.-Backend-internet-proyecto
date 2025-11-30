import { AppDataSource } from "../../config/basedatos";
import { Auditoria } from "../entidades/auditoria.entity";

/**
 * se basara en el registro de las acciones importantes en la tabla Auditoria
 * @param usuario 
 * @param accion 
 */
export const registrarAuditoria = async (usuario: string, accion: string) => {
  try {
    const auditoriaRepo = AppDataSource.getRepository(Auditoria); // <-- cambio aquí

    const nuevoRegistro = auditoriaRepo.create({
      usuario_creacion: usuario, // aqui se sabe que es lo que realizo el usuario 
      accion: accion,// la accion que realizo 
      estado: "Activo",// el estado de registro activo por defecto
    });

    await auditoriaRepo.save(nuevoRegistro);
    console.log("La auditoría ya fue registrada");
  } catch (error) {
    console.error("Salió error al registrar la auditoría", error);
  }
};