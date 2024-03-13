import { Request, Response } from "express";
import validator from "validator";
import model from "../models/usuarioModelo";

class UsuarioController {
  public async list(req: Request, res: Response) {
    try {
      // Obtener la lista de usuarios desde la base de datos
      const users = await model.list();
      // Devolver la lista de usuarios como respuesta
      return res.json({ message: "Listado de Usuarios", users, code: 0 });
    } catch (error: any) {
      return res.status(500).json({ message: `${error.message}` });
    }
  }


  public async add(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // Verificar si el email ya está en uso
      const existingUser = await model.getUserByEmail(email);
      if (existingUser.length > 0) {
        return res.status(400).json({ message: "El correo electrónico ya está en uso" });
      }

      // Si el email no está en uso, proceder a agregar el nuevo usuario
      // Agregar el nuevo usuario a la base de datos
      // Aquí deberías agregar la lógica para agregar el usuario a tu base de datos
      // y luego enviar una respuesta de éxito
      return res.json({ message: "Agregar Usuario", code: 0 });
    } catch (error: any) {
      return res.status(500).json({ message: `${error.message}` });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // Verificar si el usuario existe
      const existingUser = await model.getUserByEmail(email);
      if (existingUser.length === 0) {
        return res.status(404).json({ message: "El usuario no existe" });
      }

      // Si el usuario existe, proceder con la actualización
      // Lógica para actualizar el usuario en la base de datos
      // ...

      return res.json({ message: "Usuario actualizado correctamente" });
    } catch (error: any) {
      return res.status(500).json({ message: `${error.message}` });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { email } = req.body;

      // Verificar si el usuario existe
      const existingUser = await model.getUserByEmail(email);
      if (existingUser.length === 0) {
        return res.status(404).json({ message: "El usuario no existe" });
      }

      // Si el usuario existe, proceder con la eliminación
      // Lógica para eliminar el usuario de la base de datos
      // ...

      return res.json({ message: "Usuario eliminado correctamente" });
    } catch (error: any) {
      return res.status(500).json({ message: `${error.message}` });
    }
  }
}

export const usuarioController = new UsuarioController();
