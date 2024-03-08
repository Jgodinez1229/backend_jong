import { Request, Response } from "express";
import validator from "validator";
import model from '../models/authModelo';

class AuthController {

    public async iniciarSesion(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            // Verificar que los datos no estén vacíos
            if (validator.isEmpty(email.trim()) || validator.isEmpty(password.trim())) {
                return res.status(400).json({ message: "El email y/o contraseña están vacíos" });
            }

            const lstUsers = await model.getuserByEmail(email);

            // Verificar si el usuario existe en la base de datos
            if (lstUsers.length <= 0) {
                return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto", code: 1 });
            }

            // Verificar la contraseña (agregar lógica de verificación de contraseña aquí si es necesario)

            return res.json({ message: "Autenticación correcta", code: 0 });

        } catch (error: any) {
            return res.status(500).json({ message: `${error.message}` });
        }
    }
}

export const authController = new AuthController();