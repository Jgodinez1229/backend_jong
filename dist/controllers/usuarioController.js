"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioController = void 0;
const usuarioModelo_1 = __importDefault(require("../models/usuarioModelo"));
class UsuarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Obtener la lista de usuarios desde la base de datos
                const users = yield usuarioModelo_1.default.list();
                // Devolver la lista de usuarios como respuesta
                return res.json({ message: "Listado de Usuarios", users, code: 0 });
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // Verificar si el email ya está en uso
                const existingUser = yield usuarioModelo_1.default.getUserByEmail(email);
                if (existingUser.length > 0) {
                    return res.status(400).json({ message: "El correo electrónico ya está en uso" });
                }
                // Si el email no está en uso, proceder a agregar el nuevo usuario
                // Agregar el nuevo usuario a la base de datos
                // Aquí deberías agregar la lógica para agregar el usuario a tu base de datos
                // y luego enviar una respuesta de éxito
                return res.json({ message: "Agregar Usuario", code: 0 });
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                // Verificar si el usuario existe
                const existingUser = yield usuarioModelo_1.default.getUserByEmail(email);
                if (existingUser.length === 0) {
                    return res.status(404).json({ message: "El usuario no existe" });
                }
                // Si el usuario existe, proceder con la actualización
                // Lógica para actualizar el usuario en la base de datos
                // ...
                return res.json({ message: "Usuario actualizado correctamente" });
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                // Verificar si el usuario existe
                const existingUser = yield usuarioModelo_1.default.getUserByEmail(email);
                if (existingUser.length === 0) {
                    return res.status(404).json({ message: "El usuario no existe" });
                }
                // Si el usuario existe, proceder con la eliminación
                // Lógica para eliminar el usuario de la base de datos
                // ...
                return res.json({ message: "Usuario eliminado correctamente" });
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
//# sourceMappingURL=usuarioController.js.map