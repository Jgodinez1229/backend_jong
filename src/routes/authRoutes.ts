import { Router, RouterOptions } from "express";
import { authController } from '../controllers/authController';

class AuthRoutes {
//Objeto de tipo Router
public router: Router;
// Iniciotiza
constructor() {
  this.router = Router();
  this.config();
}
config(){
    
    this.router.post('/', authController.iniciarSesion);        
    };
 }


const authRoutes = new AuthRoutes();
export default authRoutes. router;
