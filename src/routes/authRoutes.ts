import { Router } from "express";
import AuthController from "../controllers/authController";

const router = Router();

const authRoutes = router
.post('/auth', AuthController.auth)

export default authRoutes;